import React from "react";
import { Col, Container, Row, Form, FormGroup, Input, Label, Button, Card, CardBody } from "reactstrap";

const KudosFilter = props => (


    <Form>
        <Row>
            <Col>
                <FormGroup>
                    <Card>
                        <CardBody>
                            <Label>Filter Kudos by Receiver</Label>
                            <Input
                                type="select"
                                onChange={props.filterReceiver}
                            >
                                <option>Select Receiver</option>
                                {props.receivers.map((receiver, index) => <option key={index}>{receiver}</option>)}

                            </Input>
                        </CardBody>
                    </Card>
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                    <Card>
                        <CardBody>
                            <Label>Filter Kudos by Sender</Label>
                            <Input
                                type="select"
                                onChange={props.filterSender}
                            >
                                <option>Select Sender</option>
                                {props.senders.map((sender, index) => <option key={index}>{sender}</option>)}
                            </Input>
                        </CardBody>
                    </Card>
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                    <Card>
                        <CardBody>
                            <Label>Filter Kudos by Date</Label>
                            <Input
                                type="select"
                                onChange={props.filterDate}
                            >
                                <option>Select Date</option>
                                {props.dates.map((date, index) => <option key={index}>{date}</option>)}
                            </Input>
                        </CardBody>
                    </Card>
                </FormGroup>
            </Col>
        </Row>
    </Form>




)

export default KudosFilter;