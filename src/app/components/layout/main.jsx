import React from "react";
import useMockData from "../utils/mockData";

const Main = () => {
    // eslint-disable-next-line no-unused-vars
    const { error, initialize, progress, status } = useMockData();
    const handleClick = () => {
        initialize();
    };

    return (
        <div className="container mx-auto px-4 mt-4">
            <h2 className="text-2xl "> Main Page</h2>
            <h3 className=" hover:underline text-xl pt-2">
                Инициализация FireBase
            </h3>
            <ul>
                <li className="text-xl pt-1">Status: {status}</li>
                <li className="text-xl pt-1">Progress: {progress}%</li>
                {error && <li className="text-xl pt-1">error: {error} </li>}
            </ul>
            <button
                className="text-white text-xl bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 mt-3"
                onClick={handleClick}
            >
                Инициализировать
            </button>
        </div>
    );
};

export default Main;
