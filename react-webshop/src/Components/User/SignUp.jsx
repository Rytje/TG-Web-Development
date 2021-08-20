import React, { useRef } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import TopBar from '../Layout/TopBar';
import Navigation from '../Layout/Navigation';
import { useAuth } from '../../Contexts/AuthContext';

export default function SignUp() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signUp } = useAuth();

    function handleSubmit(e){
        e.preventDefault();

        signUp(emailRef.current.value, passwordRef.current.value);
    }


    let match = useRouteMatch();

    return (
        <div>
            <div className="row">
                <div className="card text-white bg-dark col-6 mx-auto mb-3">
                    <h1 className="card-header">Create an account</h1>
                    <div className="card-body">
                        <form action="" method="post">
                            <div className="form-group">
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" ref={emailRef} required />
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" ref={passwordRef} required />
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingPasswordConfirm" placeholder="Password Confirm" ref={passwordConfirmRef} required />
                                    <label for="floatingPassword">Password confirm</label>
                                </div>
                                <div className="card-body d-flex justify-content-end px-0">
                                    <Link to="/">
                                        <button type="button" className="btn btn-secondary me-3">Back</button>
                                    </Link>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </div>

                            <div className="card-footer">
                                Already have an account? <Link to="/account/signin" className="ms-1">Log in</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
