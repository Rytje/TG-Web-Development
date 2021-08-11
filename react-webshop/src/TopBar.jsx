import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import logo from '../src/asfclogo.png'

export default function TopBar() {
    return (
        <div>
            {/* <Navbar bg="dark">
                <Container>
                    <Navbar.Brand href="#home" variant="light">
                        <img
                            src={logo}
                            width="300"
                            height="83"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar> */}

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img
                        src={logo}
                        width="150"
                        height="41"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarColor01">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Home
                                    <span class="visually-hidden">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Separated link</a>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

            <div class="container-fluid p-0">
                <div class="row justify-content-between">
                    <form class="d-flex col-5">
                        <input class="form-control" type="text" placeholder="Enter product name..."></input>
                        <button class="btn btn-primary" type="submit">Search</button>
                    </form>
                    <div class="col-6 d-flex justify-content-end">
                        <button type="button" class="btn btn-primary col-2">Wishlist</button>
                        <button type="button" class="btn btn-primary col-2">Account</button>
                        <button type="button" class="btn btn-primary col-2">Cart</button>
                    </div>
                </div>
            </div>

            <div class="row d-flex justify-content-evenly">
                <button class="btn btn-lg btn-secondary col-2" type="button">Category</button>
                <button class="btn btn-lg btn-secondary col-2" type="button">Category</button>
                <button class="btn btn-lg btn-secondary col-2" type="button">Category</button>
                <button class="btn btn-lg btn-secondary col-2" type="button">Category</button>
                <button class="btn btn-lg btn-secondary col-2" type="button">Category</button>
            </div>
        </div>
    )
}
