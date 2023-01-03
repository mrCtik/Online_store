import React from "react";
// import Quality from "./quality";
// import Bookmark from "./bookmark";
import PropTypes from "prop-types";
import { Button, Table } from "flowbite-react";
import Bookmark from "./bookmark";
// import { FontAwesomeIcon } from "@heroicons/react/solid";

const Product = ({
    _id,
    name,
    rate,
    // completedMeetings,
    // qualities,
    // profession,
    onHandleDelete,
    onHandleBookmark,
    bookmark
}) => (

    <Table.Row key={_id} className="bg-white border-gray-400 bg-gray-200">
        <Table.Cell>
            {/* <img
                src={`https://avatars.dicebear.com/api/avataaars/${(
                    Math.random() + 1
                )
                    .toString(36)
                    .substring(7)}.svg`}
                className="rounded-circle shadow-1-strong me-3"
                alt="avatar"
                width="65"
                height="65"
            /> */}
        </Table.Cell>
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {name}
        </Table.Cell>
        <i className="fa-duotone fa-circle-star"></i>
        {/* <FontAwesomeIcon icon="fa-duotone fa-circle-star" /> */}

        <Table.Cell>
            {rate}/5
        </Table.Cell>
        <Table.Cell>
        White1
        </Table.Cell>
        <Table.Cell>
            <Bookmark
                _id={_id}
                bookmark={bookmark}
                onHandleBookmark={onHandleBookmark}
            />
        </Table.Cell>
        <Table.Cell>
            <Button color="failure"
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => onHandleDelete(_id)}
            >
                Delete1
            </Button>
        </Table.Cell>

    </Table.Row>

);

Product.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    qualities: PropTypes.arrayOf(PropTypes.object).isRequired,
    profession: PropTypes.objectOf(PropTypes.string).isRequired,
    onHandleDelete: PropTypes.func.isRequired,
    onHandleBookmark: PropTypes.func.isRequired,
    bookmark: PropTypes.bool.isRequired
};
export default Product;
