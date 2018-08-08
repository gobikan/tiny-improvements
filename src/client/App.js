
import React, { Component } from "react";
import moment from 'moment';
import { Col, Container, Row, Button, Card, CardBody, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import AwardCard from './components/AwardCard';
import KudosForm from "./components/KudosForm";
import KudosFilter from "./components/KudosFilter";
//import ModalComponent from "./components/ModalComponent";
import axios from "axios";

// git add . //add to watch list
// git status //confirm that is has been added and review the changes
// git commit -m "Add new components" //committing the changes with a comment
// git push origin master //pushing it to the master or HEAD (wouldn't do this in real life

class App extends Component {

  state = {
    users: [],
    fullAwards: [],
    awards: [],
    kudosTitle: "",
    kudosText: "",
    kudosReceiver: "",
    kudosSender: "",
    modal: false,
    kudosModalName: "Give Kudos",
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
        awards: response.data,
        fullAwards: response.data,
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
      //id: this.state.users.find(user => user.name === this.state.sender).id,
      Name: this.state.kudosTitle,
      Comment__c: this.state.kudosText,
      Receiver__c: this.state.users.find(user => user.name === this.state.kudosReceiver).id,
      Sender__c: this.state.users.find(user => user.name === this.state.kudosSender).id
    }).then(response => {
      // this.setState({
      //   awards: response.data
      //})
    })
  }

  //Method to get unique senders
  //const uniqueSenders = [...new ]

  //Method to get sender in ordre to filter awards list
  filterSender = event => {
    const filterAwards = this.state.fullAwards.filter(award => award.sender__r.Name === event.target.value);
    this.setState({ awards: filterAwards });
  }

  //Method to get receiver in order to filter Awards list
  filterReceiver = event => {
    const filterAwards = this.state.fullAwards.filter(award => award.receiver__r.Name === event.target.value);
    this.setState({ awards: filterAwards });
  }

  //Method to get date in order to filter Awards list
  filterDate = event => {
    const filterAwards = this.state.fullAwards.filter(award => moment(award.createddate).format('YYYY-MM-DD') === event.target.value);
    this.setState({ awards: filterAwards });
  }

  //Method to update kudoText on input
  updateKudosText = event => {
    this.setState({ kudosText: event.target.value });
  }

  //Method to update kudosTitle on input
  updateKudosTitle = event => {
    this.setState({ kudosTitle: event.target.value });
  }

  //Method to update KudoReceiver on selection
  updateKudosReceiver = event => {
    this.setState({ kudosReceiver: event.target.value });
  }

  //Method to update KudoSender on selection
  updateKudosSender = event => {
    this.setState({ kudosSender: event.target.value });
  }

  render() {
    return (

      <Container>
        <Row>
          <Col md="12">
            <h1>Moderate Improvement</h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="3">
            <Card>
              <CardBody className="mx-auto">

                {/* <Button color="success">Give Kudos</Button> */}
                <Button color="success" onClick={this.toggle}>{this.state.kudosModalName}</Button>

                {/* Presenting KudoForm through a Modal */}
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.className}>
                  <ModalHeader toggle={this.toggle}> Give Kudos </ModalHeader>
                  <ModalBody>
                    <KudosForm
                      postKudos={this.postKudos}
                      users={this.state.users}
                      updateKudosText={this.updateKudosText}
                      updateKudosTitle={this.updateKudosTitle}
                      updateKudosReceiver={this.updateKudosReceiver}
                      updateKudosSender={this.updateKudosSender}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.postKudos}>{this.state.kudosModalName}</Button>
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
              </CardBody>
            </Card>
          </Col>
          <Col md="9" >

            <KudosFilter
              filterReceiver={this.filterReceiver}
              receivers={this.state.users}
              filterSender={this.filterSender}
              senders={this.state.users}
              filterDate={this.filterDate}
              dates={this.state.fullAwards.map(award => moment(award.createddate).format('YYYY-MM-DD'))}
              numAwards={this.state.awards.length}
            />
          </Col>

        </Row>
        <hr></hr>
        <Row>
          <Col>
          </Col>
          <Col md="12" >
            {/* list out all the awards by calling the AwardCard component */}
            {this.state.awards.map((award) =>
              <AwardCard
                key={award.id}
                title={award.name}
                comment={award.comment__c}
                receiver={award.receiver__r.Name}
                sender={award.sender__r.Name}
                sent={moment(award.createddate).format('YYYY-MM-DD')}

              />)}
          </Col>
        </Row>
        <br />

      </Container>
    )
  }
}

export default App;