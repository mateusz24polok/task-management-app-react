import React, { useState, useEffect } from "react";
import Form from "../Form";
import { useHistory, useLocation } from "react-router-dom"

const SearchTaskForm = () => {
    const [searchedTask, setSearchedTask] = useState("");
    const history = useHistory();
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get("task");

    useEffect(() => {
        setSearchedTask(query)
    }, [location]);

    const onInputChange = (event) => {
        if (event.target.value === "") {
            history.push("");
        }
        setSearchedTask(event.target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const inputValueInForm = event.target[0].value;
        history.push(`?task=${inputValueInForm}`);
    }

    return (
        <Form
            inputPlaceholder="Searched task..."
            buttonContent="Filter"
            onFormSubmit={onFormSubmit}
            inputValue={searchedTask}
            onInputChange={onInputChange}
        />
    )
}

export default SearchTaskForm;