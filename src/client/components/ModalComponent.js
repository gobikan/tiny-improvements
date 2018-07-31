import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Container } from "reactstrap";
import KudosForm from "./KudosForm";

const ModalComponent = props => (
    <Container>
        {/* <Button color="success">Give Kudos</Button> */}
        <Button color="success" onClick={props.toggle}>{props.kudosModalName}</Button>
        <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
            <ModalHeader toggle={props.toggle}> {props.kudosModalName} </ModalHeader>
            <ModalBody>
                <KudosForm
                    awards={props.awards}
                    postKudos={props.postKudos}
                    users={props.users}
                    updateKudosText={props.updateKudosText}
                    kudosText={props.kudosText}
                    updateKudosTitle={props.updateKudosTitle}
                    kudosTitle={props.kudosTitle}
                    updateKudosReceiver={props.updateKudosReceiver}
                    kudosReceiver={props.kudosReceiver}
                    updateKudosSender={props.updateKudosSender}
                    kudosSender={props.kudosSender}
                />
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={props.postKudos}>{props.kudosModalName}</Button>
                <Button color="secondary" onClick={props.toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>

    </Container>


)
export default ModalComponent;