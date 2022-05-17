import React from 'react';
import Modal from '../common/modal';

const BookAppointmentModal = ({onModalClose}) => {
  return (
    <Modal onModalClose={onModalClose}>
      <Modal.Title>Select a Slot</Modal.Title>
    </Modal>
  )
}

export default BookAppointmentModal;