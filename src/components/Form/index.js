import React from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ buttonContent, inputPlaceholder, onFormSubmit, inputRef, inputValue, onInputChange }) => {
    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input ref={inputRef} value={inputValue} onChange={onInputChange} placeholder={inputPlaceholder} autoFocus />
            <Button>{buttonContent}</Button>
        </StyledForm>
    )
}

export default Form;