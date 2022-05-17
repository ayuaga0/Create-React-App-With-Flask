import React, { useState } from "react";
import styled from "styled-components";
import { Calendar, Call, Medicines, Speciality } from "../../assets";
import BookAppointmentModal from "../../book-appointment/book-appointment-modal";
import NavItem from "./nav-item";

const NavBar = styled.nav`
  display: flex;
  cursor: pointer;
`;


const Navigation = () => {

  const [isModalOpen, setOpenModal] = useState(false);

  return (
    <NavBar>
      <NavItem svg={<Speciality />} text="Our Specialities" />
      <NavItem svg={<Calendar />} text="Book an Appointment" onClick={() => setOpenModal(true)}/>
      <NavItem svg={<Medicines />} text="Order Medicines"/>
      <NavItem
        svg={<Call style={{ transform: "rotate(-30deg)" }} />}
        text="Call Us"
      />
      {isModalOpen && <BookAppointmentModal onModalClose={() => setOpenModal(false)}/>}
    </NavBar>
  );
};

export default Navigation;

// our speciliaties
// book an appointment
// call us
