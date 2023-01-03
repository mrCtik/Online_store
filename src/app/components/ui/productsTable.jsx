import React from "react";
import PropTypes from "prop-types";
import BookMark from "../common/bookmark";
import Table from "../common/table";
import { Link } from "react-router-dom";

const ProductTable = ({
    products,
    onSort,
    selectedSort,
    onToggleBookMark,
    ...rest
}) => {
    const columns = {
        image: {
            // path: "image",
            name: "Изображение",
            component: (product) => (
                <img
                    src={product.image}
                    className="rounded-circle shadow-1-strong me-3"
                    alt="avatar"
                    width="65"
                    height="65"
                />
            )
        },
        name: {
            path: "name",
            name: "Имя",
            component: (product) => (
                <Link to={`/products/${product._id}`}>{product.title}</Link>
            )
        },
        category: {
            path: "category",
            name: "Категория"
        },
        // description: {
        //     path: "description",
        //     name: "Описание"
        // },
        price: {
            name: "Стоимость",
            component: (product) => <a>{product.price + " $"} </a>
        },
        rate: {
            name: "Оценка",
            component: (product) => <a>{product.rating.rate + " /5"} </a>
        },
        count: {
            name: "Купили",
            component: (product) => <a>{product.rating.count + " раз"} </a>
        },
        bookmark: {
            path: "bookmark",
            name: "В корзину",
            component: (user) => (
                <BookMark
                    _id={user._id}
                    bookmark={user.bookmark}
                    onClick={() => onToggleBookMark(user._id)}
                />
            )
        }
    };
    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={products}
        />
    );
};

ProductTable.propTypes = {
    products: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onToggleBookMark: PropTypes.func.isRequired
};

export default ProductTable;
