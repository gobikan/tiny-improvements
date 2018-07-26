import React from "react";
import { Col, Container, Row, Form, FormGroup, Input, Label, Button, Card, CardBody } from "reactstrap";
//import InputForm from "./components/InputForm";

const KudosForm = props => (
    <Form>
        <FormGroup>
            <Label>Give Kudos to</Label>
            <Input type="select">
                {/* Go through users array and list out each user as an option */}
                {props.formusers.map((user, index) => <option key={index}>{user} </option>)}
            </Input>
        </FormGroup>
        <FormGroup>
            <Input type="text" placeholder="Kudos Title" />
        </FormGroup>
        <FormGroup>
            <Input type="textarea" placeholder="Kudos text" />
        </FormGroup>
        <Row><Col md="12">
            <Button onClick={props.postKudo}> Click me </Button>
        </Col></Row>
    </Form>
    //  why can't put button here??
)
export default KudosForm;
