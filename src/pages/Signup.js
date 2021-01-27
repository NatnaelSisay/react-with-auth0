import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

import "./signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
    const { user, isAuthenticated, isLoading, logout } =
        useAuth0() || JSON.parse(localStorage.getItem("loggedInUser"));
    console.log(useAuth0());
    localStorage.setItem("loggedinUser", JSON.stringify(useAuth0()));

    return (
        <div className="Signup-container">
            <h1>Signup</h1>
            <div className="from-container">
                {/* <form className="form">
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
                </form> */}

                {isAuthenticated && (
                    <div>
                        <img src={user.picture} alt={user.name} />
                        <h1>{user.name}</h1>
                        <h2>{user.email}</h2>
                    </div>
                )}
                <Link to="/login">Login</Link>
                <button onClick={() => logout()}>Logout</button>
            </div>
        </div>
    );
};

export default Signup;
