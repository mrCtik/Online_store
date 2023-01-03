import React, { useState } from "react";
import PropTypes from "prop-types";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

const TextField = ({ label, type, name, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false);
    const errorStyle =
        "absolute text-slate-500 ring-blue-700 ring-opacity-5 appearance-none rounded block w-full   sm:text-sm -bottom-6 ";

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    const getInputClasses = () => {
        return (
            "w-full py-2 rounded text-sm dark:bg-gray-700 h-12 focus:outline-none bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 pr-2 " +
            +(error
                ? " ring-1 ring-red-700 focus:border-red-700 focus:ring-red-700 focus:"
                : "")
        );
    };
    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };
    return (
        <div className="my-3 form-outline form-white relative ">
            <label htmlFor={name}>{label}</label>
            <div className="relative text-slate-500">
                <input
                    type={showPassword ? "text" : type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    className={getInputClasses()}
                />
                {type === "password" && (
                    <button
                        className="absolute inset-y-0.5 right-2.5 btn btn-outline-secondary text-slate-500"
                        type="button"
                        onClick={toggleShowPassword}
                    >
                        {showPassword ? (
                            <EyeIcon className="relative w-6 h-6" />
                        ) : (
                            <EyeOffIcon className="relative w-6 h-6" />
                        )}
                    </button>
                )}
                {error ? (
                    <div className={errorStyle + "text-end"}>{error}</div>
                ) : null}
            </div>
        </div>
    );
};
TextField.defaultProps = {
    type: "text"
};
TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default TextField;
