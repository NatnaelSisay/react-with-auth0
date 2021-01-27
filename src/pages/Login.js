import React from "react";
import "./loing.css";

const Login = () => {
    return (
        <div className="login-container">
            <h1>Login</h1>
            <div className="from-container">
                <form className="form">
                    <input
                        className="form-field"
                        type="email"
                        placeholder="email"
                    />
                    <input
                        className="form-field"
                        type="password"
                        placeholder="password"
                    />
                    <input className="form-field" type="submit" value="Login" />
                </form>
            </div>
        </div>
    );
};

export default Login;
