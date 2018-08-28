import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Form, Col, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import logo from '../../assets/logo.svg';
import './App.css';

class App extends Component {
  static propTypes = {
    history: PropTypes.object
  };
  redirectToListing = (event) => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get text from both input
    const repoName = document.getElementById("repoName").value;
    const repoOwner = document.getElementById("repoOwner").value;
    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/issuelisting/${repoOwner}/${repoName}`);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Github Issues Page (React/Redux Excercise) - Developed By Er. Debraj Ray</h1>
        </header>
        <Form horizontal onSubmit={this.redirectToListing} className="container mt-10">
          <FormGroup controlId="repoName">
            <Col componentClass={ControlLabel} sm={4}>
            GitHub Repository Name
            </Col>
            <Col sm={6}>
              <FormControl type="text" placeholder="e.g. issuespostman" required="true" />
            </Col>
          </FormGroup>

          <FormGroup controlId="repoOwner">
            <Col componentClass={ControlLabel} sm={4}>
            GitHub Repository Owner
            </Col>
            <Col sm={6}>
              <FormControl type="text" placeholder="e.g. debraj1990" required="true" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={8}>
              <Button type="submit">Get GitHub Issues</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default App;
