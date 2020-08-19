import React from 'react';
import { StyledSection, SectionTitle } from "./styled"

const NewTaskSection = ({ title, sectionBody }) => (
    <StyledSection>
        <SectionTitle>{title}</SectionTitle>
        {sectionBody}
    </StyledSection>
);

export default NewTaskSection;