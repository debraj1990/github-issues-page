import React, { Component } from 'react';
import { Form, Row, Col, Grid, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// const IssueList = ({responseIssueList, searchTerm, issueStateFilterBy, sortBy, onIssueStateChange, onSortByChange}) => {
class IssueList extends Component {
    constructor(props) {
        super(props);
        this.handleIssueStateChange = this.handleIssueStateChange.bind(this);
        this.handleSortByChange = this.handleSortByChange.bind(this);
    }
    
    handleIssueStateChange(e) {
        this.props.onIssueStateChange(e.target.attributes[0].value);
    }
    
    handleSortByChange(e) {
        this.props.onSortByChange(e.target.value);
    }
    render() {
        const openIssuesLength = this.props.responseIssueList.filter(issueRow => issueRow.title.toLowerCase().includes(this.props.searchTerm.toLowerCase()) && issueRow.state === 'open').length;
        const closedIssuesLength = this.props.responseIssueList.filter(issueRow => issueRow.title.toLowerCase().includes(this.props.searchTerm.toLowerCase()) && issueRow.state === 'closed').length;
        let filteredIssueList = this.props.responseIssueList;
        const sortByKey = this.props.sortBy.split('|')[0];
        const sortByOrder = this.props.sortBy.split('|')[1];
        if(sortByKey === 'comments') {
            filteredIssueList = this.props.responseIssueList.filter(issueRow => issueRow.title.toLowerCase().includes(this.props.searchTerm.toLowerCase()) && issueRow.state === this.props.issueStateFilterBy).sort((a, b) => (a[sortByKey] > b[sortByKey] ? (sortByOrder === 'asc' ? 1:-1) : (sortByOrder === 'asc' ? -1:1)));
        } else {
            filteredIssueList = this.props.responseIssueList.filter(issueRow => issueRow.title.toLowerCase().includes(this.props.searchTerm.toLowerCase()) && issueRow.state === this.props.issueStateFilterBy).sort((a, b) => (new Date(a[sortByKey]).getTime() > new Date(b[sortByKey]).getTime() ? (sortByOrder === 'asc' ? 1:-1) : (sortByOrder === 'asc' ? -1:1)));
        }
        // updated_at|asc, updated_at|desc, comments|asc, comments|desc

        return (
        <Grid className="result-table">
            <Row className="grey-bg">
            <Col xs={2}>
                <span stateval="open" onClick={this.handleIssueStateChange}><i className="fas fa-exclamation-circle"></i>{openIssuesLength} Open</span>
            </Col>
            <Col xs={2}>
                <span stateval="closed" onClick={this.handleIssueStateChange}><i class="fas fa-check"></i>{closedIssuesLength} Closed</span>
            </Col>
            <Col xs={4}>
            </Col>
            <Col xs={4}>
                <Form horizontal>
                    <FormGroup controlId="sortBy">
                        <Col componentClass={ControlLabel} sm={4}>
                        Sort By
                        </Col>
                        <Col sm={8}>
                            {/* <ControlLabel>Select State</ControlLabel> */}
                            <FormControl componentClass="select" placeholder="Sort" defaultValue={this.props.sortBy} onChange={this.handleSortByChange}>
                                <option value="created_at|desc">Newest</option>
                                <option value="created_at|asc">Oldest</option>
                                <option value="comments|desc">Most Commented</option>
                                <option value="comments|asc">Least Commented</option>
                                <option value="updated_at|desc">Recently Updated</option>
                                <option value="updated_at|asc">Least Recently Updated</option>
                            </FormControl>
                        </Col>
                    </FormGroup>
                </Form>
            </Col>
            </Row>
            <table className="table table-hover">
                <tbody>
                {filteredIssueList.map(filteredItem =>
                    <tr key={filteredItem.number}>
                        <td>
                            <Link to={`/issuedetail/${filteredItem.number}`}>
                                <h4>{filteredItem.state === 'open' ? <i className="fas fa-exclamation-circle status-open"></i> : <i className="fas fa-check status-close"></i>}{filteredItem.title}</h4>
                            </Link>
                            <p><span>#{filteredItem.number} opened on {filteredItem.created_at} by {filteredItem.user.login} </span></p>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </Grid>
        );
    }
  }
  export default IssueList;