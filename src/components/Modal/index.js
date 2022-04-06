import React from 'react';
import {
    ModalWrapper,
    ModalHeader,
    CloseModalBtn,
    ModalContent,
    ModalBody,
    ModalFooter,
    BtnCancel,
} from "./ModalElements";

const Modal = ({ show, ModalToggle }) => {
    return (
        <ModalWrapper show={show} onClick={ModalToggle}>
            <ModalHeader>
                <p>Welcome</p>
                <CloseModalBtn>X</CloseModalBtn>
            </ModalHeader>
            <ModalContent>
                <ModalBody>
                    <h4>Modal</h4>
                    <p>Lorem ipsum</p>
                </ModalBody>
                <ModalFooter>
                    <BtnCancel>Close</BtnCancel>
                </ModalFooter>
            </ModalContent>
        </ModalWrapper>
    );
};

export default Modal;