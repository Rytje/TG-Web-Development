import React from 'react'
import Footer from '../Layout/Footer';
import TopBar from '../Layout/TopBar';
import Navigation from '../Layout/Navigation';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import FightSticksPage from './FightSticksPage';
import PadsPage from './PadsPage';
import ProductDetailPage from './ProductDetailPage';

export default function StorePage() {

    let match = useRouteMatch();

    return (
        <div>
            <TopBar />
            <Navigation />
            <Switch>
                <Route path={`${match.url}/fightsticks/:productId`}><ProductDetailPage /></Route>
                <Route path={`${match.url}/fightsticks`}><FightSticksPage /></Route>
                <Route path={`${match.url}/pads`}><PadsPage /></Route>
                <Route path="/store/buttons"><PadsPage /></Route>
                <Route path="/store/hitbox"><PadsPage /></Route>
                <Route path="/store/parts"><PadsPage /></Route>
            </Switch>
            <Footer />
        </div>
    )
}
