import React from "react";
import "./style.css";

const Form = () => (
    <form className="newTaskSection__form">
        <input className="newTaskSection__input" placeholder="What's to do?" autoFocus />
        <button className="newTaskSection__button">Add task</button>
    </form>
)

export default Form;