import React from 'react';
import PageNavigation from "./components/PageNavigation";
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import TasksPage from './pages/TasksPage';
import AboutAuthorPage from './pages/AboutAuthorPage';
import { BrowserRouter, Route, Switch } from "react-router-dom"

const navigationItems = [
  {
    name: "Tasks",
    path: "/",
    id: 0,
  },
  {
    name: "About Author",
    path: "/author",
    id: 1,
  },
]

const App = () => {

  return (
    <BrowserRouter>
      <Container>

        <Header title="Task management application" />

        <PageNavigation navigationItems={navigationItems} />

        <Switch>
          <Route exact path="/" component={TasksPage} />
          <Route path="/author" component={AboutAuthorPage} />
          <Route>
            <p>Error Page</p>
          </Route>
        </Switch>

        <Footer title="Task management application by Mateusz Polok 2020" />

      </Container>
    </BrowserRouter>
  );
}

export default App;
