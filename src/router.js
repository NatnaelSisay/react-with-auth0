import { Route, Switch } from "react-router-dom";

import { Login, Signup, Home } from "./pages";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
        </Switch>
    );
};

export default Routes;
