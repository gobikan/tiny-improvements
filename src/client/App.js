import React, { Component } from "react";
import { Col, Container, Row, Button, Card, CardBody, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import AwardCard from './components/AwardCard';
import KudosForm from "./components/KudosForm";
import axios from "axios";

// git add . //add to watch list
// git status //confirm that is has been added and review the changes
// git commit -m "Add new components" //committing the changes with a comment
// git push origin HEAD //pushing it to the master or HEAD (wouldn't do this in real life

class App extends Component {

  state = {
    users: [],
    awards: [],
    kudosTitle: "",
    kudosText: "",
    kudosReceiver: "",
    kudosSender: "",
    modal: false
  }


  //pulling data from Users and Awards API and populating users and awards arrays
  componentDidMount = () => {

    this.toggle = this.toggle.bind(this);

    axios.get("/api/users").then(
      response => {
        this.setState(
          { users: response.data }
        )
      }
    );

    axios.get("/api/kudos").then(response =>
      this.setState({
        awards: response.data
      })
    );

  }

  //trying out modal
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  //Method to post specified Kudos
  postKudos = () => {
    axios.post("/api/kudos", {
      id: 5,
      title: this.state.kudosTitle,
      comment: this.state.kudosText,
      receiver: this.state.kudosReceiver
    }).then(response => {
      this.setState({
        awards: response.data
      })
    })
  }

  //Method to update kudoText on input
  updateKudosText = event => {
    this.setState({
      kudosText: event.target.value
    });
  }

  //Method to update kudosTitle on input
  updateKudosTitle = event => {
    this.setState({
      kudosTitle: event.target.value
    });
  }

  //Method to update KudoReceiver on selection
  updateKudosReceiver = event => {
    this.setState({
      kudosReceiver: event.target.value
    });
  }

  //Method to update KudoSender on selection
  updateKudosSender = event => {
    this.setState({
      kudosSender: event.target.value
    });
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
                {/* <Button color="success">Give Kudos</Button> */}
                <Button color="success" onClick={this.toggle}>Give Kudos</Button>

                {/* Presenting KudoForm through a Modal */}
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.className}>
                  <ModalHeader toggle={this.toggle}> Give Kudos </ModalHeader>
                  <ModalBody>
                    <KudosForm
                      awards={this.state.awards}
                      postKudos={this.postKudos}
                      users={this.state.users}
                      updateKudosText={this.updateKudosText}
                      kudosText={this.state.kudosText}
                      updateKudosTitle={this.updateKudosTitle}
                      kudosTitle={this.state.kudosTitle}
                      updateKudosReceiver={this.updateKudosReceiver}
                      kudosReceiver={this.state.kudosReceiver}
                      updateKudosSender={this.updateKudosSender}
                      kudosSender={this.state.kudosSender}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.postKudos}>Post Kudos</Button>
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
              </CardBody>
            </Card>
          </Col>
          <Col md="12" lg="9">
            {/* list out all the awards by calling the AwardCard component */}
            {this.state.awards.map((award, index) =>
              <AwardCard
                key={index}
                title={award.name}
                comment={award.comment__c}
              // receiver={award.receiver}
              />)}
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="12">

            {/* present the KudosForm and passing the relevant props*/}
            {/* <KudosForm
              awards={this.state.awards}
              postKudos={this.postKudos}
              users={this.state.users}
              updateKudosText={this.updateKudosText}
              kudosText={this.state.kudosText}
              updateKudosTitle={this.updateKudosTitle}
              kudosTitle={this.state.kudosTitle}
              updateKudosReceiver={this.updateKudosReceiver}
              kudosReceiver={this.state.kudosReceiver}
              updateKudosSender={this.updateKudosSender}
              kudosSender={this.state.kudosSender}
            /> */}

          </Col>
        </Row>

      </Container>
    )
  }
}

export default App;