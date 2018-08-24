import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Issuelisting from "./issue-listing/IssueListing";
import App from "./app/App";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/issuelisting/:repoOwner/:repoName" component={Issuelisting} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
