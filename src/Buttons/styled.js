import styled, {css} from "styled-components";

export const LineButton = styled.button`
    background-color: transparent;
    color: teal;
    border: none;
    cursor: pointer;

    &:hover{
        color: #009999;
    }

    :disabled{
        color: gray;
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