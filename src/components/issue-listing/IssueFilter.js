import React, { Component } from 'react';
import { Form, Row, Col, Grid, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
const IssueFilter = () => (
    <div>
      <Form horizontal >
        <FormGroup controlId="searchTerm" className="col-sm-4">
          <Col componentClass={ControlLabel} sm={2}>
          search Term
          </Col>
          <Col>
            <FormControl type="text" onChange="" placeholder="Start Typing Issue Name.." />
          </Col>
        </FormGroup>
  
        <FormGroup controlId="issueState" className="col-sm-2">
          <Col componentClass={ControlLabel} sm={2}>
          Select Issue State
          </Col>
          <Col>
            {/* <ControlLabel>Select State</ControlLabel> */}
            <FormControl componentClass="select" onChange="" placeholder="Select Issue State" defaultValue="open">
              <option value="all">Issue State=Open/Closed</option>
              <option value="open">Issue State=Open</option>
              <option value="closed">Issue State=Closed</option>
            </FormControl>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );

  export default IssueFilter;