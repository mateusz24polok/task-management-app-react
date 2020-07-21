import React, { useState } from 'react';
import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import TaskSection from './TaskSection';
import NewTaskSection from './NewTaskSection';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';

const tasksArray = [
  { id: 1, description: "Przejść na Reacta", done: true },
  { id: 2, description: "Zjeść obiad", done: false },
];



function App() {

  const [isDoneTasksHidden, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(isDoneTasksHidden => !isDoneTasksHidden);
  };

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
            tasks={tasksArray}
            isDoneTasksHidden={isDoneTasksHidden}
          />
        }

        sectionBody={
          <Tasks
            tasks={tasksArray}
            isDoneTasksHidden={isDoneTasksHidden}
          />
        }
      />

      <Footer title="Task management application by Mateusz Polok 2020" />

    </Container>
  );
}

export default App;
