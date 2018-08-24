import React, { Component } from 'react';
import { Form, Row, Col, Grid, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
const IssueHeader = ({issueCount, repoOwner, repoName}) => (
    <Grid>
      <Row className="show-grid">
        <Col xs={4}>
          <span>{repoOwner} / {repoName}</span>
        </Col>
        {/* <Col xs={6} md={4}>
          <code>{'<Col xs={6} md={4} />'}</code>
        </Col> */}
      </Row>
      <Row className="show-grid">
        <Col xs={1}>
        </Col>
        <Col xs={2}>
          <span>Issues<i>{issueCount}</i></span>
        </Col>
      </Row>
    </Grid>
  );
  export default IssueHeader;