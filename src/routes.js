import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from './pages/About';
import Cart from './pages/Cart';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Store from './pages/Store';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/store" exact component={Store} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/sign-up" exact component={SignUp} />
                <Route path="/sign-in" exact component={SignIn} />
            </Switch>
        </BrowserRouter>
    )
}