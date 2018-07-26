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
      users: [
        // {
        //   userId: 45089,
        //   name: "Owen",
        //   position: "Captian of the Breakroom"
        // },
        // {
        //   userId: 223,
        //   name: "Brooke",
        //   position: "Winner of All Dance-Offs"
        // },
        // {
        //   userId: 6582,
        //   name: "Gobi",
        //   position: "King of Mid-Day Naps1"
        // }
      ],

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

  //comment
  /*comment */
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
    axios.get("/api/friends").then(
      response => {
        this.setState(
          { friends: response.data }
        )
      }
    );
    axios.post("/api/kudos", {
      id: 4,
      title: "Loudest Easter Award",
      comment: "Who chews carrots like that at work??"
    }).then(response => {
      this.setState({
        awards: response.data
      })
    })
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
            <br />
            <VoteForm />
          </Col>
          <Col md="12" lg="9">
            {this.state.awards.map((award, index) => <AwardCard key={index} title={award.title} comment={award.comment} receiver={award.receiver} />)}
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="12">
            {/* {this.state.users.map((element, i) => <p>{element.name}</p>)} */}
            {/* pass users attribut to KudosForm that consist of names from the array of users. Had to use <div> or it didn't work */}

            <KudosForm postKudo={this.postKudoFunction} formusers={this.state.users.map(user => { user.name })} />

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