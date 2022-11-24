import React from "react";
// Librares
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Card from "../Card";
// Components

// Store
// import { isLoggedInSelector } from "../store/authSlice";

const AuthLayout = () => {
    // let { path } = useRouteMatch();
    // const isLoggedIn = useSelector(isLoggedInSelector());
    const isLoggedIn = false;

    if (isLoggedIn) {
        return <Navigate to="/" />;
    }

    return (
        <div className="flex grow flex-col justify-center items-center  dark:text-slate-200 ">
            <Card>
                <Outlet />
            </Card>
        </div>
    );
};

export default AuthLayout;
