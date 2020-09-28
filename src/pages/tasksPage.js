import React from 'react';
import Form from '../components/Form/';
import Tasks from '../components/Tasks';
import Buttons from '../components/Buttons';
import TaskSection from '../components/TaskSection';
import NewTaskSection from '../components/NewTaskSection';


const tasksPage = () => (
    <>

        <NewTaskSection
            title="Add new task"
            sectionBody={<Form />}
        />

        <TaskSection
            title="Tasks List"
            extraHeaderContent={<Buttons />}
            sectionBody={<Tasks />}
        />

    </>

);

export default tasksPage;