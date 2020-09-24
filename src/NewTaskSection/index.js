import React from 'react';
import { StyledSection, Title, StyledLineButton, TitleSection } from "./styled"

const NewTaskSection = ({ title, sectionBody }) => (
    <StyledSection>
        <TitleSection>
            <Title>{title}</Title>
            <StyledLineButton>Get Sample Tasks</StyledLineButton>
        </TitleSection>
        {sectionBody}
    </StyledSection>
);

export default NewTaskSection;