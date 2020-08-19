import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: white;
`;

export const SectionTitle = styled.h1`
    font-size: 22px;
    border-bottom: 1px solid rgb(250,250,250);
    padding: 15px;
    margin-bottom: 0;

    @media (max-width:515px) and (orientation:portrait) {
        text-align: center;
}
`;