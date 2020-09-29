import React from "react";
import { StyledSection, SectionTitle } from "./styled";

const Section = ({ title, extraHeaderContent, sectionBody, blockDisplay, centerTitle }) => (
    <StyledSection
        blockDisplay={blockDisplay}
    >

        <SectionTitle centerTitle={centerTitle}>{title}</SectionTitle>
        {extraHeaderContent}
        {sectionBody}

    </StyledSection>
);

export default Section;