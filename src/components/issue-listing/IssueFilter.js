import React, { Component } from 'react';
import { Form, Row, Col, Grid, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
class IssueFilter extends Component {
    render() {
        
        return (
            <div>
            <Form horizontal className="col-sm-12" >
                {/* <Col xs={6}> */}
                    <FormGroup controlId="searchTerm"> {/* className="col-sm-4"*/}
                        <Col componentClass={ControlLabel} sm={2}>
                        Filter By
                        </Col>
                        <Col sm={5}>
                            <FormControl type="text" onChange="" placeholder="Start Typing Issue Name.." />
                        </Col>
                    </FormGroup>
                {/* </Col> */}
                {/* <Col xs={6}>&nbsp;</Col> */}
            </Form>
            </div>
        );
    }
}
export default IssueFilter;