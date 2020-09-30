import styled, { css } from "styled-components";

export const StyledSection = styled.section`
    display: grid;
    grid-template-areas: "title button--hide button--toggleDone" "list list list";
    grid-template-columns: 1fr auto auto;
    grid-gap: 20px;
    align-items: center;
    background-color: ${({ theme }) => theme.color.white};
    margin-top: 20px;
    padding: ${({ padding }) => padding};

    ${({ blockDisplay }) => blockDisplay && css`
        display: block;
    `}

    @media (max-width:515px) and (orientation:portrait) {
        grid-template-areas: "title" "button--hide" "button--toggleDone" "list";
        grid-template-columns: 1fr;
}
`;

export const SectionTitle = styled.h2`
    font-size: 22px;
    border-bottom: 1px solid ${({ theme }) => theme.color.alabaster};
    padding: 15px;
    margin: 0;
    grid-area: title;

    ${({ centerTitle }) => centerTitle && css`
        text-align: center;
    `}

    @media (max-width:515px) and (orientation:portrait) {
        text-align: center;
}
`;