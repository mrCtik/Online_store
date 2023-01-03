import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const getSortArrow = () => {
        return (
            <i>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={`${
                            selectedSort.order === "asc"
                                ? "M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
                                : "M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
                        }`}
                    />
                </svg>
            </i>
        );
    };
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            onSort({ path: item, order: "asc" });
        }
    };

    return (
        <thead className="text-xs text-gray-200 uppercase bg-gray-600 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                {columns &&
                    Object.keys(columns).map((column) => (
                        <th
                            key={column}
                            onClick={
                                columns[column].path
                                    ? () => handleSort(columns[column].path)
                                    : null
                            }
                            scope="col"
                            role={columns[column].path ? "button" : ""}
                            className="py-3 px-6"
                        >
                            <div className="flex items-left py-2 px-2">
                                {columns[column].name}
                                {columns[column].path &&
                                    columns[column].path ===
                                        selectedSort.path &&
                                    getSortArrow()}
                            </div>
                        </th>
                    ))}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};
export default TableHeader;
