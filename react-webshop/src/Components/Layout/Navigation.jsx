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
                    <div class="row d-flex justify-content-around">
                        <Link class="col-2" to="/fightsticks">
                            <button class="btn btn-lg btn-secondary col-12" type="button">Fight Sticks</button>
                        </Link>
                        <Link class="col-2" to="/pads">
                            <button class="btn btn-lg btn-secondary col-12" type="button">Pads</button>
                        </Link>
                        <Link class="col-2" to="/buttons">
                            <button class="btn btn-lg btn-secondary col-12" type="button">Buttons</button>
                        </Link>
                        <Link class="col-2" to="/hitbox">
                            <button class="btn btn-lg btn-secondary col-12" type="button">Hit Box</button>
                        </Link>
                        <Link class="col-2" to="/parts">
                            <button class="btn btn-lg btn-secondary col-12" type="button">Parts</button>
                        </Link>
                    </div>

                    <div>
                        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                        <Switch>
                        <Route path="/" exact component={Homepage} />
                            <Route path="/fightsticks" component={FightSticksPage} />
                            <Route path="/pads" component={PadsPage} />
                            
                        </Switch>
                    </div>
                    

                </Router>
        </div>
    )
}
