import React, { Component } from "react";
import { Col, Container, Row, Button, Card, CardBody, Form, FormGroup, Input, Label } from "reactstrap";
import VoteForm from './components/VoteForm';
import AwardCard from './components/AwardCard';
import KudosForm from "./components/KudosForm";

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: [
        {
          userId: 45089,
          name: "Owen",
          position: "Captian of the Breakroom"
        },
        {
          userId: 223,
          name: "Brooke",
          position: "Winner of All Dance-Offs"
        },
        {
          userId: 6582,
          name: "Gobi",
          position: "King of Mid-Day Naps1"
        }
      ],

      restaurants: [
        {
          name: 'Maialino',
          genre: 'Italian',
          score: 4.4
        },
        {
          name: 'Beyond Sushi',
          genre: 'Vegan',
          score: 4.7
        },
        {
          name: 'Abyssinia',
          genre: 'Ethiopian',
          score: 4.5
        },
        {
          name: 'La Roja de Todos',
          genre: 'Chilean',
          score: 4.5
        }
      ],

      awards: [
        {
          id: 1,
          title: "Best Boss Award!",
          comment: "Thanks for always looking out for us.",
          sender: "Fabian",
          receiver: "Leon"
        },
        {
          id: 2,
          title: "Longest Commute Award!",
          comment: "I can't believe Laura makes it to work as often as she does.",
          sender: "Archit",
          receiver: "Laura"
        },
        {
          id: 3,
          title: "Most likely to nap at work!",
          comment: "Maybe you need more coffee.",
          sender: "Gobi",
          receiver: "Owen"
        }

      ]
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <h1>Tiny Progress</h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="12" lg="3">
            <Card>
              <CardBody className="mx-auto">
                <Button color="success">Give Kudos</Button>
              </CardBody>
            </Card>
            <br />
            <VoteForm />
          </Col>
          <Col md="12" lg="9">
            {this.state.awards.map(award => <AwardCard title={award.title} comment={award.comment} receiver={award.receiver} />)}
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="12">
            {/* {this.state.users.map((element, i) => <p>{element.name}</p>)} */}
            {/* pass users attribut to KudosForm that consist of names from the array of users. Had to use <div> or it didn't work */}
            <KudosForm users={this.state.users.map(element => <div> {element.name}</div>)} />

            {/* <Form>
              <FormGroup>
                <Label>Give Kudos to</Label>
                <Input type="select">
                  {this.state.users.map(element => <option>{element.name}</option>)}
                </Input>
              </FormGroup>
              <FormGroup>
                <Input type="text" placeholder="Kudos Title" />
              </FormGroup>
              <FormGroup>
                <Input type="textarea" placeholder="Kudos text" />
              </FormGroup>
            </Form> */}
          </Col>
        </Row>
        {/*New Code Goes Below Here */}

      </Container>
    )
  }
}

export default App;