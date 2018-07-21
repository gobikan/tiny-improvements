import React from "react";
import { Col, Container, Row, Form, FormGroup, Input, Label, Button, Card, CardBody } from "reactstrap";
//import InputForm from "./components/InputForm";

const KudosForm = props => (
    <Form>
        <FormGroup>
            <Label>Give Kudos to</Label>
            <Input type="select">
                {/* Go through users array and list out each user as an option */}
                {props.users.map(user => <option>{user}</option>)}


            </Input>
        </FormGroup>
        <FormGroup>
            <Input type="text" placeholder="Kudos Title" />
        </FormGroup>
        <FormGroup>
            <Input type="textarea" placeholder="Kudos text" />
        </FormGroup>
    </Form>
)
export default KudosForm;
