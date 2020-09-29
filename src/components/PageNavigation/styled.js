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