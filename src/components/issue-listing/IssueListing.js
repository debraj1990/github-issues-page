import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Form, Col, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import logo from '../../assets/logo.svg';
import './IssueListing.css';

class IssueListing extends Component {
  // static propTypes = {
  //   history: PropTypes.object
  // };
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
    return (
      <div className="issue-listing-page">
      </div>
    );
  }
}

export default App;
