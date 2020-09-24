import styled from "styled-components";
import { LineButton } from "../LineButton/styled";

export const StyledSection = styled.section`
    background-color: white;
`;

export const Title = styled.h1`
    font-size: 22px;
    border-bottom: 1px solid ${({ theme }) => theme.color.alabaster};
    padding: 15px;
    margin-bottom: 0;

    @media (max-width:515px) and (orientation:portrait) {
        text-align: center;
    }
`;

export const StyledLineButton = styled(LineButton)`
    margin-right: 15px;

    @media (max-width:515px) and (orientation:portrait) {
        margin-right: 0;
    }
`;

export const TitleSection = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: baseline;

    @media (max-width:515px) and (orientation:portrait) {
        flex-direction: column;
        align-items: center;
    }
`;