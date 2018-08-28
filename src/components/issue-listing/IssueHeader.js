import React, { Component } from 'react';
import { Form, Row, Col, Grid, Tab, Tabs, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const IssueHeader = ({issueCount, repoOwner, repoName}) => (
    <Grid>
      <Row className="show-grid">
        <Col xs={4}>
          <p>{repoOwner} / {repoName}</p>
        </Col>
      </Row>
      <Row className="show-grid">
        <Col xs={12}>
        </Col>
        <Col xs={12}>
          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title={'Issues ' + issueCount}>
              {/* <p>Issues<i>{issueCount}</i></p> */}
            </Tab>
          </Tabs>
          {/* <p>Issues<i>{issueCount}</i></p> */}
        </Col>
      </Row>
    </Grid>
  );
  export default IssueHeader;