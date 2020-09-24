import styled, { css } from "styled-components";
import { LineButton } from "../LineButton/styled";

export const StyledLineButton = styled(LineButton)`
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