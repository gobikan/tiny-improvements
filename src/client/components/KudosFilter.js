import React from "react";
import { Col, Container, Row, Form, FormGroup, Input, Label, Button, Card, CardBody } from "reactstrap";

const KudosFilter = props => {

    const obj = {}
    const uniqueDates = props.dates.forEach(date => {
        obj[date] = true
    })
    return (


        <Form>
            <Row>
                <Col>
                    <FormGroup>
                        <Card>
                            <CardBody>
                                <Label>Filter by Receiver</Label>
                                <Input
                                    type="select"
                                    onChange={props.filterReceiver}
                                >
                                    <option>Select Receiver</option>
                                    {props.receivers.map((receiver) => <option key={receiver.id}>{receiver.name}</option>)}

                                </Input>
                            </CardBody>
                        </Card>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Card>
                            <CardBody>
                                <Label>Filter by Sender</Label>
                                <Input
                                    type="select"
                                    onChange={props.filterSender}
                                >
                                    <option>Select Sender</option>
                                    {props.senders.map((sender) => <option key={sender.id}>{sender.name}</option>)}
                                </Input>
                            </CardBody>
                        </Card>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Card>
                            <CardBody>
                                <Label>Filter by Date</Label>
                                <Input
                                    type="select"
                                    onChange={props.filterDate}
                                >
                                    <option>Select Date</option>
                                    {Object.keys(obj).map((date, index) => <option key={index}>{date}</option>)}
                                </Input>
                            </CardBody>
                        </Card>
                    </FormGroup>
                </Col>
                <Col>
                    <Card>
                        <CardBody>
                            <h3>Count: {props.numAwards}</h3>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Form>




    )
}


export default KudosFilter;