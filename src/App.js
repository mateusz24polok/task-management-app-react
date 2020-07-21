import React, { useState } from 'react';
import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import TaskSection from './TaskSection';
import NewTaskSection from './NewTaskSection';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';


function App() {

  const [isDoneTasksHidden, setHideDone] = useState(false);
  const [tasksArray, setTasksArray] = useState([
    { id: 1, description: "Przejść na Reacta", done: true },
    { id: 2, description: "Zjeść obiad", done: false },
  ])

  const toggleHideDone = () => {
    setHideDone(isDoneTasksHidden => !isDoneTasksHidden);
  };

  const removeTask = (id) => {
    setTasksArray(tasksArray => tasksArray.filter(task => task.id !== id));
  }

  const addNewTask = (description) => {
    setTasksArray(tasksArray => (
      [
        ...tasksArray,
      {
        id: tasksArray.length === 0 ? 1 : tasksArray[tasksArray.length -1].id + 1,
        description,
        done: false
      }
    ]
    ))
  }


  return (
    <Container>

      <Header title="Task management application" />

      <NewTaskSection
        title="Add new task"
        sectionBody={
          <Form
          addNewTask={addNewTask}
          />
        }
      />

      <TaskSection
        title="Tasks List"

        extraHeaderContent={
          <Buttons
            toggleHideDone={toggleHideDone}
            tasks={tasksArray}
            isDoneTasksHidden={isDoneTasksHidden}
          />
        }

        sectionBody={
          <Tasks
            tasks={tasksArray}
            isDoneTasksHidden={isDoneTasksHidden}
            removeTask={removeTask}
          />
        }
      />

      <Footer title="Task management application by Mateusz Polok 2020" />

    </Container>
  );
}

export default App;
