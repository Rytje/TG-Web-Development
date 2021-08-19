import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Navigation() {
    return (
        <div>
            {/* <Router> */}
                <div className="row mb-5 d-flex justify-content-around">
                    <Link className="col-2 p-0" to="/store/fightsticks">
                        <button className="btn btn-lg btn-secondary col-12" type="button">Fight Sticks</button>
                    </Link>
                    <Link className="col-2 p-0" to="/store/pads">
                        <button className="btn btn-lg btn-secondary col-12" type="button">Pads</button>
                    </Link>
                    <Link className="col-2 p-0" to="/store/buttons">
                        <button className="btn btn-lg btn-secondary col-12" type="button">Buttons</button>
                    </Link>
                    <Link className="col-2 p-0" to="/store/hitbox">
                        <button className="btn btn-lg btn-secondary col-12" type="button">Hit Box</button>
                    </Link>
                    <Link className="col-2 p-0" to="/store/parts">
                        <button className="btn btn-lg btn-secondary col-12" type="button">Parts</button>
                    </Link>
                </div>

            {/* </Router> */}
        </div>
    )
}
