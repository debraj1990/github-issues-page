import React, { Component, Fragment } from 'react';
import { Form, Row, Col, Grid, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './IssueDetail.css';

class Comments extends Component {
    render() {
        console.log(this.props);
        const commentsArr = this.props.comments;
        return(
            <Fragment>
                {commentsArr.map(commentRowItem =>
                <Row key={commentRowItem.id} className="comments-section">
                    <Col xs={2}>
                        <img src={commentRowItem.user.avatar_url} title={commentRowItem.user.login} alt={commentRowItem.user.login} className="img-thumbnail comment-author-img"/>
                    </Col>
                    <Col xs={10}>
                        <Col xs={12} className="comments-heading">
                        <span>{commentRowItem.user.login} commented on {commentRowItem.created_at}</span>
                        </Col>
                        <Col xs={12} className="comments-body">
                            <span>{commentRowItem.body}</span>
                        </Col>
                    </Col>
                </Row>
                )}
            </Fragment>
        )
    }
}
export default Comments;