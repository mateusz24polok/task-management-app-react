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
    border-bottom: 1px solid rgb(250,250,250);

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
    color: white;
    transition: background-color 0.15s;

    ${({ remove }) => (remove && css`
        background-color: red;
        font-weight: 700;

        &:hover{
            background-color: hsl(0, 100%, 65%);
        }
    `)}

    ${({ done }) => (done && css`
        background-color: green;

        &:hover{
            background-color: hsl(120, 100%, 30%);
        }
    `)}
`;