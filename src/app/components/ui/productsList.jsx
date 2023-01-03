import React, { useState, useEffect } from "react";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";
import Pagination from "./pagination";
import api from "../../api";
import ProductTable from "./productTable";

const pageSize = 10;

const ProductsList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [products, setProducts] = useState([]);
    const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });

    useEffect(() => {
        Promise.all([
            api.products.fetchAll().then((data) => setProducts(data))
        ]).catch();
    }, []);

    const count = products.length;

    if (!products.length) return "Loading...";

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleSort = (item) => {
        setSortBy(item);
    };

    const userCrop = paginate(products, currentPage, pageSize);

    const currentPageBefore = Math.ceil(count / pageSize);
    if (currentPage > currentPageBefore) {
        setCurrentPage(currentPageBefore);
    }
    if (count === 0) {
        return null;
    }

    const handleBookmark = (productId) => {
        const newState = products.map((product) => {
            if (product._id === productId) {
                product.bookmark = !product.bookmark;
            }
            return product;
        });
        setProducts(newState);
    };

    const handleDelete = (productId) => {
        setProducts((prevState) =>
            prevState.filter((product) => product._id !== productId)
        );
    };

    // const filteredUsers =
    // (selectedProf &&
    //     users.filter((user) => _.isEqual(user.profession, selectedProf))) ||
    // (searchByText &&
    //     users.filter(({ name }) =>
    //         name.toLowerCase().includes(searchByText.toLowerCase())
    //     )) ||
    // users;

    // const count = filteredUsers.length;
    // const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);

    return (
        <>
            <ProductTable
                users={userCrop}
                onSort={handleSort}
                selectedSort={sortBy}
                onHandleDelete={handleDelete}
                onHandleBookmark={handleBookmark}
            />
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChandge={handlePageChange}
            />
            {/* <Table hoverable={true} >
                <Table.Head className="bg-white bg-gray-600 whitespace-nowrap font-medium text-gray-100 dark:text-white" >
                    <Table.HeadCell>
                    Изображение
                    </Table.HeadCell>
                    <Table.HeadCell>
                    Наименование
                    </Table.HeadCell>
                    <Table.HeadCell>
                    Категория
                    </Table.HeadCell>
                    <Table.HeadCell>
                    Встретился, раз
                    </Table.HeadCell>
                    <Table.HeadCell>
                    Оценка
                    </Table.HeadCell>
                    <Table.HeadCell>
                    Избранное
                    </Table.HeadCell>
                    <Table.HeadCell>
                    Удалить
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {userCrop.map((product) => (
                        <Product
                            key={product._id}
                            {...product}
                            onHandleDelete={onHandleDelete}
                            onHandleBookmark={onHandleBookmark}
                        />
                    ))}
                </Table.Body>
            </Table>
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChandge={handlePageChange}
            /> */}
        </>
    );
};

ProductsList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            bookmark: PropTypes.bool,
            completedMeetings: PropTypes.number,
            name: PropTypes.string,
            profession: PropTypes.shape({
                id: PropTypes.string,
                name: PropTypes.string
            }),
            qualities: PropTypes.arrayOf(
                PropTypes.shape({
                    _id: PropTypes.string,
                    name: PropTypes.string,
                    color: PropTypes.string
                })
            ),
            rate: PropTypes.number,
            _id: PropTypes.string
        })
    ).isRequired,
    onHandleBookmark: PropTypes.func.isRequired,
    onHandleDelete: PropTypes.func.isRequired
};

export default ProductsList;
