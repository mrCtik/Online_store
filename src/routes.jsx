import React from "react";

import Main from "./app/components/layout/main";
import Login from "./app/components/layout/login";
import LogOut from "./app/components/layout/logOut";
import Users from "./app/components/layout/users";
import AuthLayout from "./app/components/layout/AuthLayout";

const routes = () => [
    {
        path: "/",
        element: <Main />
    },
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "logout",
                element: <LogOut />
            }
        ]
    },
    {
        path: "users",
        element: <Users />
    }
];

export default routes;
