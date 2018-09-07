import React, { Component } from 'react';
import { Form, Row, Col, Grid, Tab, Tabs, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const IssueHeader = ({issueCount, repoOwner, repoName}) => (
    <Grid className="issue-header">
      <Row className="repo-info">
        <Col xs={4}>
          <p>{repoOwner} / {repoName}</p>
        </Col>
      </Row>
      <Row className="counter-tab">
        <Col xs={12}>
        </Col>
        <Col xs={12}>
          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title={`Issues ${issueCount}`}>
              {/* <p>Issues<span className="counter">{issueCount}</span></p> */}
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Grid>
  );
  export default IssueHeader;