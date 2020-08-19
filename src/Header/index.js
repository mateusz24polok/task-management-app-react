import React from 'react';
import { AppTitle } from "./styled";

const Header = ({ title }) => (
    <header>
        <AppTitle>
            {title}
        </AppTitle>
    </header>
);

export default Header;