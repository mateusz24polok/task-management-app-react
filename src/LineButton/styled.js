import styled from "styled-components";

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
`;