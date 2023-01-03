import React from "react";
import PropTypes from "prop-types";
import Bookmark from "./bookmark";
// import QualitiestList from "./qulitiesList";
import { Link } from "react-router-dom";
import MyTable from "../table/table";

const ProductTable = ({
    users,
    onSort,
    selectedSort,
    onHandleBookmark,
    onHandleDelete
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
                <Link to={`/users/${product._id}`}>{product.title}</Link>
            )
        },
        // category: {
        //     path: "category",
        //     name: "Категория"
        // },
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
                <Bookmark
                    _id={user._id}
                    bookmark={user.bookmark}
                    onClick={() => onHandleBookmark(user._id)}
                />
            )
        },
        delete: {
            component: (user) => (
                <button
                    type="button"
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    onClick={() => onHandleDelete(user._id)}
                >
                    Delete
                </button>
            )
        }
    };

    return (
        <MyTable
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={users}
        />
    );
};

ProductTable.propTypes = {
    users: PropTypes.arrayOf(
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
    onSort: PropTypes.func,
    selectedSort: PropTypes.object.isRequired,
    onHandleBookmark: PropTypes.func,
    onHandleDelete: PropTypes.func
};

export default ProductTable;
