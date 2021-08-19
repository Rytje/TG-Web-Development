import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import TopBar from '../Layout/TopBar';
import Navigation from '../Layout/Navigation';

export default function SignIn() {

    let match = useRouteMatch();

    return (
        <div>
            <div className="row">
                <div className="card text-white bg-dark col-6 mx-auto mb-3">
                    <h1 className="card-header">Log in</h1>
                    <div className="card-body">
                        <form action="" method="post">
                            <div className="form-group">
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <div className="card-body d-flex justify-content-end px-0">
                                    <Link to="/">
                                        <button type="button" className="btn btn-secondary me-3">Back</button>
                                    </Link>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </div>

                            <div className="card-footer">
                                Don't have an account? <Link to="/account/signup" className="ms-1">Sign up</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
