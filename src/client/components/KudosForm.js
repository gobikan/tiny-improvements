import React from "react";
import { Col, Container, Row, Form, FormGroup, Input, Label, Button, Card, CardBody } from "reactstrap";
//import InputForm from "./components/InputForm";

const KudosForm = props => (
    <Form>
        <FormGroup>
            <Label>Give Kudos to (Receiver)</Label>
            <Input
                type="select"
                placeholder="Receiver"
                onChange={props.updateKudosReceiver}
                value={props.kudosReceiver}
            >
                {/* Go through formusers array and map out the name of each user*/}
                <option>Select receiver</option>
                {props.users.map((user, index) => <option key={index}>{user.name} </option>)}

            </Input>
        </FormGroup>
        <FormGroup>
            <Input
                type="text"
                placeholder="Kudos Title"
                onChange={props.updateKudosTitle}
                value={props.kudosTitle}
            />
        </FormGroup>
        <FormGroup>
            <Input
                type="textarea"
                placeholder="Kudos Text"
                onChange={props.updateKudosText}
                value={props.kudosText}
            />
        </FormGroup>
        <FormGroup>
            <Label>Kudos from (Sender)</Label>
            <Input
                type="select"
                placeholder="Sender"
                onChange={props.updateKudosSender}
                value={props.kudosSender}
            >
                {/* Go through formusers array and map out the name of each user*/}
                <option>Select sender</option>
                {props.users.map((user, index) => <option key={index}>{user.name} </option>)}

            </Input>
        </FormGroup>

        {/* <Row><Col md="12">
            <Button color="primary" onClick={props.postKudos}>Post Kudos</Button>
        </Col></Row> */}
    </Form>
    //  why can't put button here??
)
export default KudosForm;
