import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

import "./loing.css";

const Login = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className="login-container">
            <h1>Login</h1>
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
                    <input className="form-field" type="submit" value="Login" />
                </form> */}
                <button onClick={() => loginWithRedirect()}>
                    Login with Auth0
                </button>
            </div>
        </div>
    );
};

export default Login;
