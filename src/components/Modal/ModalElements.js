import styled from "styled-components";

export const ModalWrapper = styled.div`
    background: #fff;
    width: 80%;
    max-width: 800px;
    margin: 4rem auto;
    transition: 0.3s ease-in-out;
    opacity: ${({ show }) => (show ? '100%' : '0')};
    top: ${({ show}) => (show ? '0' : '-100%')};
`;

export  const ModalHeader = styled.div`
    background: #2c2c2c;
    color: #e9e9e9
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const CloseModalBtn = styled.span`
    font-size: 1.5rem;
    cursor: pointer;
`;

export const ModalContent = styled.div`
    padding: 1.5rem 1rem;
`;

export const ModalBody = styled.div`
    margin-bottom: 1rem;
`;

export const ModalFooter = styled.div`
    background: #000;
`;

export const BtnCancel =styled.button`
    display: block;
    font-size: 1rem;
    margin-left: auto;
    padding: 0.5rem 1.8rem;
    background: #DD501D;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
`;
