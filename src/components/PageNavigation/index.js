import React from 'react';
import { Navigation, NavigationList, NavigationItem } from "./styled";
import PropTypes from "prop-types"

const PageNavigation = ({ navigationItems }) => (
    <Navigation>
        <NavigationList>
            {navigationItems && navigationItems.length
                ?
                (navigationItems.map(navItem => (
                    <NavigationItem key={navItem}>
                        <a href="#">{navItem}</a>
                    </NavigationItem>)))
                : null}
        </NavigationList>
    </Navigation>
);

PageNavigation.propTypes = {
    navigationItems: PropTypes.arrayOf(PropTypes.string).isRequired
};



export default PageNavigation;