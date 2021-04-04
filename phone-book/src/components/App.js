import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import CreateContact from "./directory/CreateContact";
import DeleteContact from "./directory/DeleteContact";
import ContactList from "./directory/ContactList";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={ContactList} />
            <Route path="/contacts/new" exact component={CreateContact} />

            <Route
              path="/contacts/delete/:id"
              exact
              component={DeleteContact}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
