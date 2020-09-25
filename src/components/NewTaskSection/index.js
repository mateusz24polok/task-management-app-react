import React from 'react';
import { StyledSection, Title, StyledLineButton, TitleSection } from "./styled"
import { useDispatch, useSelector } from "react-redux"
import { getSampleTasks, selectExampleTaskLoading, selectExampleTaskLoadingError } from "../Tasks/tasksSlice";

const NewTaskSection = ({ title, sectionBody }) => {
    const loadingStatus = useSelector(selectExampleTaskLoading);
    const loadingErrorInfo = useSelector(selectExampleTaskLoadingError);
    const dispatch = useDispatch();

    return (
        <StyledSection>
            <TitleSection>
                <Title>{title}</Title>
                <StyledLineButton
                    disabled={loadingStatus || loadingErrorInfo}
                    onClick={() => dispatch(getSampleTasks())}
                >
                    {loadingErrorInfo === "" ? (loadingStatus ? "Loading..." : "Get Example Tasks") : loadingErrorInfo}
                </StyledLineButton>
            </TitleSection>
            {sectionBody}
        </StyledSection>
    )
};

export default NewTaskSection;