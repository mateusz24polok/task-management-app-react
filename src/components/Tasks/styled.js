import styled, { css } from "styled-components";

export const TasksList = styled.ul`
    list-style: none;
    padding: 10px 20px;
    margin: 0;
    grid-area: list;
`;

export const TaskItem = styled.li`
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.color.alabaster};

    ${({ hidden }) => (hidden && css`
        display: none;
    `)}
`;

export const TaskContent = styled.p`
    flex-grow: 1;
    margin: 20px 10px;

    ${({ done }) => (done && css`
        text-decoration: line-through;
    `)}
`;

export const Button = styled.button`
    flex-basis: 30px;
    flex-shrink: 0;
    height: 30px;
    padding: 3px;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.color.white};
    transition: background-color 0.15s;

    ${({ remove }) => (remove && css`
        background-color: ${({ theme }) => theme.color.red};
        font-weight: 700;

        &:hover{
            background-color: ${({ theme }) => theme.color.lightRed};
        }
    `)}

    ${({ done }) => (done && css`
        background-color: ${({ theme }) => theme.color.green};

        &:hover{
            background-color: ${({ theme }) => theme.color.lightGreen};
        }
    `)}
`;