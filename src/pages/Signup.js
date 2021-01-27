import React from "react";
import "./signup.css";

const Signup = () => {
    return (
        <div className="Signup-container">
            <h1>Signup</h1>
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
                    <input
                        className="form-field"
                        type="submit"
                        value="Signup"
                    />
                </form>
            </div>
        </div>
    );
};

export default Signup;
