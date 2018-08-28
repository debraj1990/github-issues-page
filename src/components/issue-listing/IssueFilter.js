import React, { Component } from 'react';
import { Form, Row, Col, Grid, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class IssueFilter extends Component {
    constructor(props) {
        super(props);
        this.handleSearchTermTextChange = this.handleSearchTermTextChange.bind(this);
    }
    
    handleSearchTermTextChange(e) {
        this.props.onSearchTermChange(e.target.value);
    }
    render() {
        return (
            <div>
            <Form horizontal className="col-sm-12 mt-10" >
                    <FormGroup controlId="searchTerm">
                        <Col componentClass={ControlLabel} sm={2}>
                        Filter By
                        </Col>
                        <Col sm={5}>
                            <FormControl type="text" onChange={this.handleSearchTermTextChange} value={this.props.searchTerm} placeholder="Start Typing Issue Name.." />
                        </Col>
                    </FormGroup>
            </Form>
            </div>
        );
    }
}
export default IssueFilter;