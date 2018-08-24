import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Form, Row, Col, Grid, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './IssueListing.css';
import IssueHeader from './IssueHeader';
import IssueFilter from './IssueFilter';
import IssueList from './IssueList';

class IssueListing extends Component {
  constructor (props) {
    super(props);
    // const { params } = props.match;
    this.state = {
      searchTerm: '',
      issueStateFilterBy: 'open',
      sortBy: '',
      filteredIssueList: []
    };
  }
  static propTypes = {
    match: PropTypes.object
  };
  componentDidMount () {
    const { params } = this.props.match;
    const issuesEndPoint = `https://api.github.com/repos/${params.repoOwner}/${params.repoName}/issues?state=all`;
    console.log(issuesEndPoint);
    this.fetchIssueList(issuesEndPoint);
  }
  fetchIssueList(ajaxUri) {
    fetch(ajaxUri)
      .then(response => response.json())
      .catch(error => console.error('Error:', error))
      .then((response) => {
        console.log('Success:', response);
        // return response;
        if(response.length){
          this.setState({ filteredIssueList: response });
        }
        console.log('filteredData', this.state.filteredIssueList);
      });
    }
  // redirectToListing = (event) => {
  //   // 1. Stop the form from submitting
  //   event.preventDefault();
  //   // 2. get text from both input
  //   const repoName = document.getElementById("repoName").value;
  //   const repoOwner = document.getElementById("repoOwner").value;
  //   // 3. Change the page to /store/whatever-they-entered
  //   this.props.history.push(`/issuelisting/${repoOwner}/${repoName}`);
  // }
  render() {
    const openIssuesLength = this.state.filteredIssueList.filter(issueRow => issueRow.state === 'open').length;
    return (
      <div className="issue-listing-page">
        <IssueHeader issueCount={openIssuesLength} repoOwner={this.props.match.params.repoOwner} repoName={this.props.match.params.repoName} />
        <IssueFilter />
        <IssueList responseIssueList={this.state.filteredIssueList} searchTerm={this.state.searchTerm} issueStateFilterBy={this.state.issueStateFilterBy} sortBy={this.state.sortBy} />
      </div>
    );
  }
}


export default IssueListing;
