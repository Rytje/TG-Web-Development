import React from 'react'
import logo from '../../Assets/Images/asfclogo.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import WishList from '../User/WishList'
import Cart from '../User/Cart'
import SignUp from '../User/SignUp'

export default function TopBar() {

    return (
        <header className="row mb-5">
            <nav className="navbar navbar-expand-lg navbar-light bg-light col-12">
                <Link className="navbar-brand ms-4" to="/"><img
                    src={logo}
                    width="150"
                    height="41"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                /></Link>
            </nav>

            <div className="row mx-0 px-0">
                <div className="col-12 d-flex justify-content-between px-0">
                    <form className="d-flex col-4">
                        <input className="form-control" type="text" placeholder="Enter product name..."></input>
                        <button className="btn btn-secondary" type="submit">Search</button>
                    </form>
                    <div className="col-6 d-flex justify-content-end pe-0">
                        {/* <Router> */}
                            <Link className="col-2 p-0" to="/wishlist">
                                <button type="button" className="btn btn-primary col-12">Wishlist</button>
                            </Link>
                            <Link className="col-2 p-0" to="/account/signup">
                                <button type="button" className="btn btn-primary col-12">Account</button>
                            </Link>
                            <Link className="col-2 p-0" to="/cart">
                                <button type="button" className="btn btn-primary col-12">Cart</button>
                            </Link>

                            <div>
                                {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
                                <Switch>
                                    {/* <Route path="/wishlist" component={WishList} /> */}
                                    {/* <Route path="/account" component={SignUp} /> */}
                                    {/* <Route path="/cart" component={Cart} /> */}
                                </Switch>
                            </div>

                        {/* </Router> */}
                    </div>
                </div>
            </div>
        </header>
    )
}
