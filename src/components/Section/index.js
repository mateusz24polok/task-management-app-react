import React from "react";
import { StyledSection, SectionTitle } from "./styled";

const Section = ({ title, extraHeaderContent, sectionBody, blockDisplay, centerTitle, padding }) => (
    <StyledSection
        blockDisplay={blockDisplay}
        padding={padding}
    >

        <SectionTitle centerTitle={centerTitle}>{title}</SectionTitle>
        {extraHeaderContent}
        {sectionBody}

    </StyledSection>
);

export default Section;