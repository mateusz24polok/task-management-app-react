import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navigation = styled.nav`
    padding: 15px;
    font-size: 18px;
    text-align: center;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.alabaster};

    @media (max-width:515px) and (orientation:portrait) {
        font-size: 14px;
        padding: 10px;
}
`;

export const NavigationList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const NavigationItem = styled.li`
    color: blue;
    margin: 10px 40px;
`;

export const StyledNavLink = styled(NavLink).attrs(props => ({
    activeClassName: "active",
}))`
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};

    &:visited{
        color: ${({ theme }) => theme.color.white};
    }

    &:hover{
        filter: brightness(90%);
    }

    &.active{
        font-weight: 700;
        filter: brightness(100%);
    }
`;