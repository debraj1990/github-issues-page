import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import { fetchIssueList } from '../../helpers';
import IssueHeader from '../issue-listing/IssueHeader';
import Comments from '../issue-detail/Comments';
import { Form, Row, Col, Grid, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './IssueDetail.css';

const mapStateToProps = state => (
  {
    issues: state.issues,
    repoOwner: state.repoOwner,
    repoName: state.repoName,
    comments: state.comments
  })
const mapDispatchToProps = dispatch => (
  bindActionCreators(actionCreators, dispatch)
)

let IssueDetail = (props) => {
    console.log(props);
    if(props.issues.length === 0) {
      props.history.push(`/`);
      window.location.reload();
    }
    const openIssuesLength = props.issues.filter(issueRow => issueRow.state === 'open').length;
    const selectedIssue = props.issues.find(issueRow => issueRow.number == props.match.params.issueNumber);
    console.log(selectedIssue);
    //Call the comments API with the helper method
    let commentsApiResponse = fetchIssueList(selectedIssue.comments_url);
    commentsApiResponse
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then((response) => {
      if (typeof response === 'undefined') {
          throw Error('The fetch request failed');
      }
      console.log('Success:', response);
      let commentsArr = [];
      if(response.length){
        commentsArr = response;
      }
      props.updateComment(response);
      console.log('updated props:');
      console.log(props);
    });
    // commentsArr = props.comments;
    return(
    <div className="issue-detail-page">
      <IssueHeader issueCount={openIssuesLength} repoOwner={props.repoOwner} repoName={props.repoName} />
      <Grid className="issue-details">
        <Row className="issue-title">
          <Col xs={12}>
            <h2>{selectedIssue.title} <span>#{selectedIssue.number}</span></h2>
            <p><span>{selectedIssue.user.login} opened this issue on {selectedIssue.created_at}. {selectedIssue.comments} comments </span></p>
          </Col>
        </Row>
        <Row className="comments-section">
          <Col xs={2}>
            <img src={selectedIssue.user.avatar_url} title={selectedIssue.user.login} alt={selectedIssue.user.login} className="img-thumbnail comment-author-img"/>
          </Col>
          <Col xs={10}>
            <Col xs={12} className="comments-heading">
              <span>{selectedIssue.user.login} commented on {selectedIssue.created_at}</span>
            </Col>
            <Col xs={12} className="comments-body">
              <span>{selectedIssue.body}</span>
            </Col>
          </Col>
        </Row>
        <Comments {...props} />
      </Grid>
    </div>
  )}

  IssueDetail = connect(mapStateToProps, mapDispatchToProps)(IssueDetail);
 
  export default IssueDetail;