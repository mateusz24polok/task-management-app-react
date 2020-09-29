import React from 'react';
import Form from '../components/Form';
import Tasks from '../components/Tasks';
import Buttons from '../components/Buttons';
import Section from '../components/Section';
import NewTaskSection from '../components/NewTaskSection';


const TasksPage = () => (
    <>

        <NewTaskSection
            title="Add new task"
            sectionBody={<Form />}
        />

        <Section
            title="Tasks List"
            extraHeaderContent={<Buttons />}
            sectionBody={<Tasks />}
        />

    </>

);

export default TasksPage;