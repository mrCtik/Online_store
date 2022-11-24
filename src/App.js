// import "./App.css";
import React from "react";
import { useRoutes } from "react-router-dom";
import NavBar from "./app/components/ui/NavBar";
import routes from "./routes";
// import { Routes } from "react-router-dom";
function App() {
    const elements = useRoutes(routes());

    return (
        <>
            {/* <Routes> */}
            <NavBar />
            {elements}

            <h1 className="text-3xl font-bold underline text-lightblack">
                Hello world!
            </h1>

            {/* </Routes> */}
        </>
    );
}

export default App;
