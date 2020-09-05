import React from "react";
import "./css/Main.css";
import "./css/Carousel.scss";
import Main from "./pages";
import Login from "./pages/Login";
import Planform from "./pages/Planform";
import ChoosePlan from "./pages/ChoosePlan";
import ChoosePlanSteps from "./components/chooseplan/ChoosePlanSteps";
import ChoosePlanTabs from "./components/chooseplan/ChoosePlanTabs";

// import Browse from "./pages/Browse";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/planform" component={Planform} />
        <Route path="/choose-plan" component={ChoosePlan} />
        <Route path="/choose-plan-steps" component={ChoosePlanSteps} />
        <Route path="/choose-plan-tabs" component={ChoosePlanTabs} />
      </Switch>
    </div>
  );
}

export default App;
