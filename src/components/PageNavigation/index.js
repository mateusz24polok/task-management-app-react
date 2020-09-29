import React from 'react';
import { Navigation, NavigationList, NavigationItem, StyledNavLink } from "./styled";
import PropTypes from "prop-types"

const PageNavigation = ({ navigationItems }) => (
    <Navigation>
        <NavigationList>
            {navigationItems && navigationItems.length
                ?
                (navigationItems.map(navItem => (
                    <NavigationItem key={navItem.id}>
                        <StyledNavLink exact={navItem.exact} to={navItem.path}>{navItem.name}</StyledNavLink>
                    </NavigationItem>))
                )
                : null}
        </NavigationList>
    </Navigation>
);

PageNavigation.propTypes = {
    navigationItems: PropTypes.arrayOf(PropTypes.string).isRequired
};



export default PageNavigation;