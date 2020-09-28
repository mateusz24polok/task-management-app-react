import styled from "styled-components";

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
    list-style: none;
`;

export const NavigationItem = styled.li`
    color: blue;
`;