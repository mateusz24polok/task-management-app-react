import React, { useState, useEffect } from 'react';
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
  const [tasksArray, setTasksArray] = useState(JSON.parse(localStorage.getItem("tasks")))

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksArray))
  }, [tasksArray])

  const toggleHideDone = () => {
    setHideDone(isDoneTasksHidden => !isDoneTasksHidden);
  };

  const removeTask = (id) => {
    setTasksArray(tasksArray => tasksArray.filter(task => task.id !== id));
  }

  const toggleTaskDone = (id) => {
    setTasksArray(tasksArray => tasksArray.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task
    })
    );
  };

  const setAllTasksDone = () => {
    setTasksArray(tasksArray => tasksArray.map(task => {
      return {
        ...task,
        done: true,
      }
    }))
  }

  const addNewTask = (description) => {
    setTasksArray(tasksArray => (
      [
        ...tasksArray,
        {
          id: tasksArray.length === 0 ? 1 : tasksArray[tasksArray.length - 1].id + 1,
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
            setAllTasksDone={setAllTasksDone}
            tasks={tasksArray}
            isDoneTasksHidden={isDoneTasksHidden}
          />
        }

        sectionBody={
          <Tasks
            tasks={tasksArray}
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
