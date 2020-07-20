import React from "react";
import "./style.css";

const TaskSection = ({title, extraHeaderContent, sectionBody}) => (
    <section className="tasksSection">
        <h2 className="tasksSection__title">{title}</h2>
        {extraHeaderContent}
        {sectionBody}
    </section>
);

export default TaskSection;