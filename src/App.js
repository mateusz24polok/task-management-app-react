import React from 'react';
import Form from './components/Form';
import Tasks from './components/Tasks';
import Buttons from './components/Buttons';
import TaskSection from './components/TaskSection';
import NewTaskSection from './components/NewTaskSection';
import PageNavigation from "./components/PageNavigation";
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';


function App() {

  return (
    <Container>

      <Header title="Task management application" />

      <PageNavigation navigationItems={["Tasks", "About author"]} />

      <NewTaskSection
        title="Add new task"
        sectionBody={<Form />}
      />

      <TaskSection
        title="Tasks List"
        extraHeaderContent={<Buttons />}
        sectionBody={<Tasks />}
      />

      <Footer title="Task management application by Mateusz Polok 2020" />

    </Container>
  );
}

export default App;
