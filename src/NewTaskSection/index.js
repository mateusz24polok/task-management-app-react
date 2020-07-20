import React from 'react';
import './style.css';

const NewTaskSection = ({title, sectionBody}) => (
    <section className="newTaskSection">
        <h2 className="newTaskSection__title">{title}</h2>
        {sectionBody}
    </section>
);

export default NewTaskSection;