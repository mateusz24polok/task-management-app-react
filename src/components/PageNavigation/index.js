import React from 'react';
import { Navigation, NavigationList, NavigationItem } from "./styled";
import PropTypes from "prop-types"
import {NavLink} from "react-router-dom";

const PageNavigation = ({ navigationItems }) => (
    <Navigation>
        <NavigationList>
            {navigationItems && navigationItems.length
                ?
                (navigationItems.map(navItem => (
                    <NavigationItem key={navItem.id}>
                        <NavLink to={navItem.path}>{navItem.name}</NavLink>
                    </NavigationItem>)))
                : null}
        </NavigationList>
    </Navigation>
);

PageNavigation.propTypes = {
    navigationItems: PropTypes.arrayOf(PropTypes.string).isRequired
};



export default PageNavigation;