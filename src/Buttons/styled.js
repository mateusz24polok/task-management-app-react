import styled, { css } from "styled-components";

export const LineButton = styled.button`
    background-color: ${({ theme }) => theme.color.transparent};
    color: ${({ theme }) => theme.color.teal};
    border: none;
    cursor: pointer;

    &:hover{
        color: ${({ theme }) => theme.color.lightTeal};
    }

    :disabled{
        color: ${({ theme }) => theme.color.gray};
        cursor: default;
    }

    ${({ hide }) => (hide && css`
        grid-area: button--hide;
    `)}

    ${({ toggleDone }) => (toggleDone && css`
        grid-area: button--toggleDone;
        margin-right: 15px;

        @media (max-width:515px) and (orientation:portrait) {
                margin: 0;  
            }
    `)}
`;