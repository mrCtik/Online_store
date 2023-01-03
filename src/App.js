import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./app/components/layout/login";
import Main from "./app/components/layout/main";
import Cart from "./app/components/ui/cart";
// import api from "./app/api";
import NavBar from "./app/components/ui/navBar";
import ProductsList from "./app/components/ui/productsList";
// import Products from "./app/components/productsList";

const App = () => {
    return (
        <>
            <div>
                <NavBar />
                <Routes>
                    <Route index element={<Main />} />
                    <Route path="login" element={<Login />} />
                    <Route path="products" element={<ProductsList />} />
                    <Route path="cart" element={<Cart />} />

                    {/* <Route path="/login/:type?" component={Login} />
                    <Route path="/" exact component={Main} />
                    <Redirect to="/" /> */}
                </Routes>
            </div>
        </>
    );
};

export default App;
