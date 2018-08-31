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
      sortBy: 'created_at|desc',
      filteredIssueList: []
    };
    
    this.handleSearchTermTextChange = this.handleSearchTermTextChange.bind(this);
    this.handleIssueStateChange = this.handleIssueStateChange.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
  }

  handleSearchTermTextChange(searchTerm) {
    this.setState({
      searchTerm: searchTerm
    });
  }
  
  handleIssueStateChange(issueStateFilterBy) { console.log(issueStateFilterBy);
    this.setState({
      issueStateFilterBy: issueStateFilterBy
    })
  }

  handleSortByChange(sortBy) {
    this.setState({
      sortBy: sortBy
    })
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
      // .then(response => { console.log(response);
      //   if (!response.ok) {
      //       throw Error(response.statusText);
      //   }
      //   return response;
      // })
      .then(response => response.json())
      .catch(error => console.error('Error:', error))
      .then((response) => {
        if (typeof response === 'undefined') {
            throw Error('The fetch request failed');
        }
        console.log('Success:', response);
        // return response;
        if(response.length){
          // store.dispatch({type: 'UPDATE_REPO_OWNER',repoOwner: 'debraj1990'});
          this.setState({ filteredIssueList: response });
        }
        console.log('filteredData', this.state.filteredIssueList);
        // store.getState();
      });
    }
  render() {
    const openIssuesLength = this.state.filteredIssueList.filter(issueRow => issueRow.state === 'open').length;
    return (
      <div className="issue-listing-page">
        <IssueHeader issueCount={openIssuesLength} repoOwner={this.props.match.params.repoOwner} repoName={this.props.match.params.repoName} />
        <IssueFilter searchTerm={this.state.searchTerm} onSearchTermChange={this.handleSearchTermTextChange} />
        <IssueList responseIssueList={this.state.filteredIssueList} searchTerm={this.state.searchTerm} issueStateFilterBy={this.state.issueStateFilterBy} sortBy={this.state.sortBy} onIssueStateChange={this.handleIssueStateChange} onSortByChange={this.handleSortByChange } />
      </div>
    );
  }
}


export default IssueListing;
