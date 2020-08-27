import styled from "styled-components";

export const StyledFooter = styled.footer`
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