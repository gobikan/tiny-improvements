import React from "react";
import moment from 'moment';
import { Card, Row, Col, CardBody } from "reactstrap";

const AwardCard = props => (
    <Card>
        <CardBody>
            <Row>
                <Col md="4">
                    <img alt="award" src="http://www.pngmart.com/files/3/Award-PNG-Photos.png" width="50px" />
                    <h2>{props.title}</h2>
                    <img alt="avatar" src="https://www.iranketab.ir/Images/user.jpg" width="100px" />
                    <h5>Receiver: {props.receiver}</h5>
                    <h5>Sender: {props.sender}</h5>
                    <h6>Sent: {props.sent}</h6>
                    {/* <h6>Sent:{moment(props.sent).format('YYYY-MM-DD')}</h6> */}
                </Col>
                <Col md="8">
                    <h5>Message:</h5>
                    <p>{props.comment}</p>
                </Col>
            </Row>
        </CardBody>
    </Card>

)
export default AwardCard;