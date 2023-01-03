import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LoginForm from "../ui/loginForm";
import RegisterForm from "../ui/registerForm";
// import RegisterForm from "../ui/registerForm";

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
        <div className="flex grow flex-col justify-center items-center  dark:text-slate-200 ">
            <div className="bg-white rounded-lg overflow-hidden ring-1 ring-slate-900/5 shadow-xl p-8  mb-20 min-w-full xs:min-w-[400px] ">
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow p-4">
                        {formType === "register" ? (
                            <>
                                <h3 className="mb-4">Register</h3>
                                <RegisterForm />
                                <p>
                                    Already have account?{" "}
                                    <a role="button" onClick={toggleFormType}>
                                        {" "}
                                        Sign In
                                    </a>
                                </p>
                            </>
                        ) : (
                            <>
                                <h3 className="text-slate-800 mb-6 text-5xl ">
                                    Login
                                </h3>
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
        </div>
    );
};

export default Login;
