import React, { useState } from 'react';
import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import TaskSection from './TaskSection';
import NewTaskSection from './NewTaskSection';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';
import { useTasks } from "./useTasks";


function App() {

  const [isDoneTasksHidden, setHideDone] = useState(false);


  const toggleHideDone = () => {
    setHideDone(isDoneTasksHidden => !isDoneTasksHidden);
  };


  const {
    removeTask,
    toggleTaskDone,
    setAllTasksDone,
  } = useTasks();




  return (
    <Container>

      <Header title="Task management application" />

      <NewTaskSection
        title="Add new task"
        sectionBody={
          <Form />
        }
      />

      <TaskSection
        title="Tasks List"

        extraHeaderContent={
          <Buttons
            toggleHideDone={toggleHideDone}
            setAllTasksDone={setAllTasksDone}
            isDoneTasksHidden={isDoneTasksHidden}
          />
        }

        sectionBody={
          <Tasks
            isDoneTasksHidden={isDoneTasksHidden}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
      />

      <Footer title="Task management application by Mateusz Polok 2020" />

    </Container>
  );
}

export default App;
