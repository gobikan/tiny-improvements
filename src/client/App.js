import React, { Component } from "react";
import { Col, Container, Row, Button, Card, CardBody, Form, FormGroup, Input, Label } from "reactstrap";
import VoteForm from './components/VoteForm';
import AwardCard from './components/AwardCard';
import KudosForm from "./components/KudosForm";
import PetCard from "./components/PetCard";
import axios from "axios";

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: [],

      friends: [],

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

      awards: [],

      pets: [
        {
          name: 'Memphis',
          age: 12,
          type: 'Dog'
        },
        {
          name: 'Baby',
          age: 11,
          type: 'Panther'
        },
        {
          name: 'Peach',
          age: 3,
          type: 'Cat'
        },
        {
          name: 'Opal',
          age: 1,
          type: 'Kitten'
        }
      ]

    }
  }


  componentDidMount = () => {
    axios.get("/api/users").then(
      response => {
        this.setState(
          { users: response.data }
        )
      }
    );

    axios.get("/api/awards").then(response =>
      this.setState({
        awards: response.data
      })
    );


  }

  //Function to post
  postKudoFunction = () => {
    axios.post("/api/kudos", {
      id: 5,
      title: "Fastest Typer Award",
      comment: "Have you seen how fast George types??"
    }).then(response => {
      this.setState({
        awards: response.data
      })
    })
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
          </Col>
          <Col md="12" lg="9">
            {this.state.awards.map((award, index) => <AwardCard key={index} title={award.title} comment={award.comment} receiver={award.receiver} />)}
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="12">

            {/* pass users from state to formusers as a prop */}
            <KudosForm awards={this.state.awards} postKudo={this.postKudoFunction} formusers={this.state.users} />

          </Col>
        </Row>
        {/*New Code Goes Below Here */}


        {/* {this.state.pets.map((pet, index) => <PetCard key={index} name={pet.name} age={pet.age} />)}

        <hr />
        <h1> 🙋🏽 Friend Space </h1>
        <br />
        <h4> My Friend List: </h4>
        <br />
        {this.state.friends.map((e, index) => (
          <Card>
            <CardBody >
              <h2 key={index}> {e.name}</h2>
              <p> {e.location} </p>
            </CardBody>
          </Card>
        ))} */}
      </Container>
    )
  }
}

export default App;