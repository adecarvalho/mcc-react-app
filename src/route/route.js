import React from "react"
import { Switch, Route } from "react-router-dom"

import HomePage from "../components/pages/HomePage"
import ModelePage from "../components/pages/ModelePage"
import MesurePage from "../components/pages/MesurePage"
import NotFound from "../components/pages/NotFound"

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/modele" component={ModelePage} />
    <Route path="/mesure" component={MesurePage} />
    <Route path="*" component={NotFound} />
  </Switch>
)

export default Routes
