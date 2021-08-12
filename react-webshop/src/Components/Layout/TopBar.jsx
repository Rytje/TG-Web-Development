import React from 'react'
import logo from '../../Assets/Images/asfclogo.png';

export default function TopBar() {

    return (
        <header class="row">
            <nav class="navbar navbar-expand-lg navbar-light bg-light col-12">
                <a class="navbar-brand ms-4" href="/"><img
                    src={logo}
                    width="150"
                    height="41"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                /></a>
            </nav>

            <div class="row mx-0 px-0">
                <div class="col-12 d-flex justify-content-between px-0">
                    <form class="d-flex col-4">
                        <input class="form-control" type="text" placeholder="Enter product name..."></input>
                        <button class="btn btn-primary" type="submit">Search</button>
                    </form>
                    <div class="col-6 d-flex justify-content-end pe-0">
                        <button type="button" class="btn btn-primary col-2">Wishlist</button>
                        <button type="button" class="btn btn-primary col-2">Account</button>
                        <button type="button" class="btn btn-primary col-2">Cart</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
