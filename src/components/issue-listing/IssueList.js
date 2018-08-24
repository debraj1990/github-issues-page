import React, { Component } from 'react';
import { Form, Row, Col, Grid, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
const IssueList = ({responseIssueList, searchTerm, issueStateFilterBy, sortBy}) => {
    const openIssuesLength = responseIssueList.filter(issueRow => issueRow.title.toLowerCase().includes(searchTerm.toLowerCase()) && issueRow.state === 'open').length;
    const closedIssuesLength = responseIssueList.filter(issueRow => issueRow.title.toLowerCase().includes(searchTerm.toLowerCase()) && issueRow.state === 'closed').length;
    // updated_at|asc, updated_at|desc, comments|asc, comments|desc
    console.log(openIssuesLength + '||' + closedIssuesLength);
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={4}>
            <span>{openIssuesLength} / {closedIssuesLength}</span>
          </Col>
          {/* <Col xs={6} md={4}>
            <code>{'<Col xs={6} md={4} />'}</code>
          </Col> */}
        </Row>
        <Row className="show-grid">
          <Col xs={1}>
          </Col>
          <Col xs={2}>
            <span><i>{issueStateFilterBy}</i></span>
          </Col>
        </Row>
      </Grid>
    );
  }
  export default IssueList;