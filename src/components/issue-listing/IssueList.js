import React, { Component } from 'react';
import { Form, Row, Col, Grid, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const IssueList = ({responseIssueList, searchTerm, issueStateFilterBy, sortBy, onIssueStateChange, onSortByChange}) => {
    const openIssuesLength = responseIssueList.filter(issueRow => issueRow.title.toLowerCase().includes(searchTerm.toLowerCase()) && issueRow.state === 'open').length;
    const closedIssuesLength = responseIssueList.filter(issueRow => issueRow.title.toLowerCase().includes(searchTerm.toLowerCase()) && issueRow.state === 'closed').length;
    let filteredIssueList = responseIssueList;
    const sortByKey = sortBy.split('|')[0];
    const sortByOrder = sortBy.split('|')[1];
    if(sortByKey === 'comments') {
        filteredIssueList = responseIssueList.filter(issueRow => issueRow.title.toLowerCase().includes(searchTerm.toLowerCase()) && issueRow.state === issueStateFilterBy).sort((a, b) => (a[sortByKey].toLowerCase() > b[sortByKey].toLowerCase() ? (sortByOrder === 'asc' ? 1:-1) : (sortByOrder === 'asc' ? -1:1)));
    } else {
        filteredIssueList = responseIssueList.filter(issueRow => issueRow.title.toLowerCase().includes(searchTerm.toLowerCase()) && issueRow.state === issueStateFilterBy).sort((a, b) => (new Date(a[sortByKey]).getTime() > new Date(b[sortByKey]).getTime() ? (sortByOrder === 'asc' ? 1:-1) : (sortByOrder === 'asc' ? -1:1)));
    }
    // updated_at|asc, updated_at|desc, comments|asc, comments|desc
  
    // handleFilterTextChange(e) {
    //     this.props.onFilterTextChange(e.target.value);
    // }
    
    // handleInStockChange(e) {
    //     this.props.onInStockChange(e.target.checked);
    // }
    return (
      <Grid className="result-table">
        <Row className="grey-bg">
          <Col xs={2}>
            <span onClick={this.onIssueStateChange}>{openIssuesLength} Open</span>
          </Col>
          <Col xs={2}>
            <span onClick={this.onIssueStateChange}>{closedIssuesLength} Closed</span>
          </Col>
          <Col xs={4}>
          </Col>
          <Col xs={4}>
            <Form horizontal>
                <FormGroup controlId="sortBy">
                    <Col componentClass={ControlLabel} sm={4}>
                    Sort By
                    </Col>
                    <Col sm={8}>
                        {/* <ControlLabel>Select State</ControlLabel> */}
                        <FormControl componentClass="select" placeholder="Sort" defaultValue={sortBy}>
                            <option value="created_at|desc">Newest</option>
                            <option value="created_at|asc">Oldest</option>
                            <option value="comments|desc">Most Commented</option>
                            <option value="comments|asc">Least Commented</option>
                            <option value="updated_at|desc">Recently Updated</option>
                            <option value="updated_at|asc">Least Recently Updated</option>
                        </FormControl>
                    </Col>
                </FormGroup>
            </Form>
          </Col>
        </Row>
        {filteredIssueList.map(filteredItem =>
        <Row key={filteredItem.number} className="">
          <Col xs={12}>
            {filteredItem.title}
          </Col>
          <Col xs={12}>
            <span>#{filteredItem.number} opened on {filteredItem.created_at} by {filteredItem.user.login} </span>
          </Col>
        </Row>
        )}
      </Grid>
    );
  }
  export default IssueList;