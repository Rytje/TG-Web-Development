import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Homepage from '../Store/Homepage'
import FightSticksPage from '../Store/FightSticksPage';
import PadsPage from '../Store/PadsPage';

export default function Navigation() {
    return (
        <div>
            <Router>
                <div className="row mb-5 d-flex justify-content-around">
                    <Link className="col-2 p-0" to="/fightsticks">
                        <button className="btn btn-lg btn-secondary col-12" type="button">Fight Sticks</button>
                    </Link>
                    <Link className="col-2 p-0" to="/pads">
                        <button className="btn btn-lg btn-secondary col-12" type="button">Pads</button>
                    </Link>
                    <Link className="col-2 p-0" to="/buttons">
                        <button className="btn btn-lg btn-secondary col-12" type="button">Buttons</button>
                    </Link>
                    <Link className="col-2 p-0" to="/hitbox">
                        <button className="btn btn-lg btn-secondary col-12" type="button">Hit Box</button>
                    </Link>
                    <Link className="col-2 p-0" to="/parts">
                        <button className="btn btn-lg btn-secondary col-12" type="button">Parts</button>
                    </Link>
                </div>

                <div>
                    {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/fightsticks" component={FightSticksPage} />
                        <Route path="/pads" component={PadsPage} />
                        <Route path="/" exact component={Homepage} />
                    </Switch>
                </div>


            </Router>
        </div>
    )
}
