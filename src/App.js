import React from "react";
import Home from "./components/home/home";
import Line from "./containers/Line/Line";
import WroomControl from "./containers/WroomControl/WroomControl";
import { Route, Switch } from "react-router-dom";
import NewWroom from "./containers/NewWroom/NewWroom";

function App() {
  return (
    <Switch>
      <Route path="/line" component={Line} />
      <Route path="/newwroom" component={NewWroom} />;
      <Route path="/wroomcontrol" component={WroomControl} />;
      <Route path="/" exact component={Home} />;
    </Switch>
  );
}

export default App;
