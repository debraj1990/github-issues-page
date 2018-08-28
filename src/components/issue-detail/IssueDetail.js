import React, { Component } from 'react';
import { Form, Row, Col, Grid, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const IssueDetail = (props) => {
    console.log(props); return(
    <Grid>
      <Row className="issue-details">issue-details
        {/* <Col xs={4}>
          <span>{repoOwner} / {repoName}</span>
        </Col>
      </Row>
      <Row className="show-grid">
        <Col xs={1}>
        </Col>
        <Col xs={2}>
          <span>Issues<i>{issueCount}</i></span>
        </Col> */}
      </Row>
    </Grid>
  )}
  export default IssueDetail;