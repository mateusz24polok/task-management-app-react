import React from 'react';
import Tasks from '../components/Tasks';
import Buttons from '../components/Buttons';
import Section from '../components/Section';
import NewTaskSection from '../components/NewTaskSection';
import NewTaskForm from "../components/NewTaskForm";
import SearchTaskForm from "../components/SearchTaskForm";


const TasksPage = () => (
    <>

        <NewTaskSection
            title="Add new task"
            sectionBody={<NewTaskForm />}
        />

        <Section
            blockDisplay
            title="Filter tasks"
            sectionBody={<SearchTaskForm />}
        />

        <Section
            title="Tasks List"
            extraHeaderContent={<Buttons />}
            sectionBody={<Tasks />}
        />

    </>

);

export default TasksPage;