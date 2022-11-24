import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card";
import LoginForm from "../ui/loginForm";
import RegisterForm from "../ui/registerForm";
// import LoginForm from "../components/ui/loginForm";
// import RegisterForm from "../components/ui/registerForm";

const Login = () => {
    const { type } = useParams();
    const [formType, setFormType] = useState(
        type === "register" ? type : "login"
    );
    const toggleFormType = (params) => {
        setFormType((prevState) =>
            prevState === "register" ? "login" : "register"
        );
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {formType === "register" ? (
                        <>
                            <h3 className="mb-4">Register</h3>
                            <RegisterForm />
                            <p>
                                Already have account?
                                <a role="button" onClick={toggleFormType}>
                                    Sign In
                                </a>
                            </p>
                        </>
                    ) : (
                        <>
                            <div className="mb-12 text-slate-900">
                                <Card.Title>Login</Card.Title>
                            </div>
                            <LoginForm />
                            <p>
                                Dont have account?
                                <a role="button" onClick={toggleFormType}>
                                    Sign Up
                                </a>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
