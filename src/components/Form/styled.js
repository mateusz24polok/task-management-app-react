import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    padding: 15px;

    @media (max-width:515px) and (orientation:portrait) {
        flex-wrap: wrap;
}
`;

export const Input = styled.input`
    flex-grow: 1;
    padding: 10px;
    font-size: 20px;

    @media (max-width:515px) and (orientation:portrait) {
        width: 100%;
        flex-basis: 100%;
        height: 50px;
}
`;

export const Button = styled.button`
    flex-basis: 100px;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({theme})=>theme.color.white};
    padding: 5px;
    border: none;
    margin-left: 10px;
    cursor: pointer;
    transition: background-color 0.2s ease-in, transform 0.15s ease;

    &:hover{
        background-color: ${({theme})=>theme.color.lightTeal};
        transform: scale(1.1);
    }

    @media (max-width:515px) and (orientation:portrait) {
        flex-basis: 100%;
        margin: 10px 0;
        padding: 10px;
        height: 50px;
        font-size: 20px;
}
`;