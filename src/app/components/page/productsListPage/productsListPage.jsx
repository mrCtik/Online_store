import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { paginate } from "../../../utils/paginate";
import Pagination from "../../common/pagination";
import GroupList from "../../common/groupList";
import SearchStatus from "../../ui/searchStatus";
import _ from "lodash";
import { useSelector } from "react-redux";
import {
    getCurrentProductId,
    getProductsList
    // getproductsLoadingStatus
    // getproductsLoadingStatus
} from "../../../store/products";
import ProductTable from "../../ui/productsTable";
import {
    getCategory,
    getCategoryLoadingStatus
} from "../../../store/categories";

const ProductsListPage = () => {
    const products = useSelector(getProductsList());
    console.log("Products", products);

    const categories = useSelector(getCategory());
    const categoriesLoading = useSelector(getCategoryLoadingStatus());

    const currentProductId = useSelector(getCurrentProductId);

    // const productsLoading = useSelector(getproductsLoadingStatus());

    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedProf, setSelectedProf] = useState(); // categories
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
    const pageSize = 8;

    const handleDelete = (productId) => {
        // setproducts(products.filter((product) => product._id !== productId));
        console.log(productId);
    };
    const handleToggleBookMark = (id) => {
        const newArray = products.map((product) => {
            if (product._id === id) {
                return { ...product, bookmark: !product.bookmark };
            }
            return product;
        });
        // setproducts(newArray);
        console.log(newArray);
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf, searchQuery]);

    const handleCategoriesSelect = (item) => {
        if (searchQuery !== "") setSearchQuery("");
        setSelectedProf(item);
    };
    const handleSearchQuery = ({ target }) => {
        setSelectedProf(undefined);
        setSearchQuery(target.value);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const handleSort = (item) => {
        setSortBy(item);
    };

    if (products) {
        function filterproducts(data) {
            const filteredProducts = searchQuery
                ? data.filter(
                      (product) =>
                          product.name
                              .toLowerCase()
                              .indexOf(searchQuery.toLowerCase()) !== -1
                  )
                : selectedProf
                ? data.filter(
                      (product) =>
                          JSON.stringify(product.category) ===
                          JSON.stringify(selectedProf.name)
                  )
                : data;
            return filteredProducts.filter((u) => u._id !== currentProductId);
        }
        const filteredProducts = filterproducts(products);
        const count = filteredProducts.length;
        const sortedProducts = _.orderBy(
            filteredProducts,
            [sortBy.path],
            [sortBy.order]
        );
        const productsCrop = paginate(sortedProducts, currentPage, pageSize);
        const clearFilter = () => {
            setSelectedProf();
        };
        return (
            <div className="d-flex">
                {categories && !categoriesLoading && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            selectedItem={selectedProf}
                            items={categories}
                            onItemSelect={handleCategoriesSelect}
                            // contentProperty={"category"}
                        />
                        <button
                            className="btn btn-secondary mt-2"
                            onClick={clearFilter}
                        >
                            Очистить
                        </button>
                    </div>
                )}
                <div className="d-flex flex-column">
                    <SearchStatus length={count} />
                    <input
                        type="text"
                        name="searchQuery"
                        placeholder="Search..."
                        onChange={handleSearchQuery}
                        value={searchQuery}
                    />
                    {count > 0 && (
                        <ProductTable
                            products={productsCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
                            onDelete={handleDelete}
                            onToggleBookMark={handleToggleBookMark}
                        />
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
    return "loading...";
};
ProductsListPage.propTypes = {
    products: PropTypes.array
};

export default ProductsListPage;
