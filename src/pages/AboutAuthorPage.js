import React from 'react';
import Section from '../components/Section';

const aboutMe = "Hi everyone, my name is Mateusz. I'm 26 and I live in Rybnik, Silesia, Poland. My passion has been web development . I've been trying to learn new things and write more and more code lines everyday since January 2020. My main technology stacks are: HTML5, CSS3, JavaScript and React with Redux. For now, I work in company where I am SCADA developer and I work with OT Systems, but I hope in the near future I could say about myself that I'm Front-End Developer. This app is a part of my portfolio and should help me to reach this target.So use it with pleasure and enjoy:) ";

const AboutAuthorPage = () => (
    <Section
        blockDisplay
        centerTitle
        title="About Author"
        sectionBody={aboutMe}
    />
);

export default AboutAuthorPage;