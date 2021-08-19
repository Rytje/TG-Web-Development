import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Footer from '../Layout/Footer'
import Navigation from '../Layout/Navigation'
import TopBar from '../Layout/TopBar'
import SignIn from './SignIn'
import SignUp from './SignUp'

export default function UserPage() {

    let match = useRouteMatch();

    return (
        <div>
            <TopBar />
            <Switch>
                <Route path={`${match.url}/signup`}><SignUp /></Route>
                <Route path={`${match.url}/signin`}><SignIn /></Route>
            </Switch>
            <Footer />
        </div>
    )
}
