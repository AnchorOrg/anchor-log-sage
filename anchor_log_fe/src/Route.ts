import React from 'react';
import { Route } from 'react-router-dom';
import AboutPage from './AboutPage';

const RouteComponent = () => {
    return (
        <Route path="/about" component={AboutPage} />
    );
};

export default RouteComponent;