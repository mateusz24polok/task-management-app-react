import styled from "styled-components";

export const StyledSection = styled.section`
    display: grid;
    grid-template-areas: "title button--hide button--toggleDone" "list list list";
    grid-template-columns: 1fr auto auto;
    grid-gap: 20px;
    align-items: center;
    background-color: white;
    margin-top: 20px;

    @media (max-width:515px) and (orientation:portrait) {
        grid-template-areas: "title" "button--hide" "button--toggleDone" "list";
        grid-template-columns: 1fr;
}
`;

export const SectionTitle = styled.h2`
    font-size: 22px;
    border-bottom: 1px solid rgb(250,250,250);
    padding: 15px;
    margin: 0;
    grid-area: title;

    @media (max-width:515px) and (orientation:portrait) {
        text-align: center;
}
`;