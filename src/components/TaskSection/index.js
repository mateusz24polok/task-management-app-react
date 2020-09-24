import React from "react";
import { StyledSection, SectionTitle } from "./styled";

const TaskSection = ({ title, extraHeaderContent, sectionBody }) => (
    <StyledSection>
        <SectionTitle>{title}</SectionTitle>
        {extraHeaderContent}
        {sectionBody}
    </StyledSection>
);

export default TaskSection;