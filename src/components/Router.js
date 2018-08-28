import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Issuelisting from "./issue-listing/IssueListing";
import App from "./app/App";
import NotFound from "./NotFound";
import IssueHeader from "./issue-listing/IssueHeader";
import IssueDetail from "./issue-detail/IssueDetail";
import IssueList from "./issue-listing/IssueList";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/issuelisting/:repoOwner/:repoName" component={Issuelisting} />
      {/* <Route path="/issuedetail/:issueNumber" render={(props) => <div className="issue-detail-page"><IssueHeader {...props} /><IssueDetail {...props} someProp={100} responseIssueList={props.responseIssueList} /></div>} /> */}
      <Route path="/issuedetail/:issueNumber" component={IssueDetail} />
      {/* No routes after this */}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
