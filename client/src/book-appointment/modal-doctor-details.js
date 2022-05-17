import React, { useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div``

const ImageContainer = styled.div``

const Content = styled.div``

const Name = styled.div``

const Speciality = styled.div``

const Description = styled.div``;

const doctor = {
  docImage: '',
  docName: '',
  docSpeciality: '',
  docDescription: ''
}

const DoctorDetailsInModal = () => {
  const {docImage, docName, docSpeciality, docDescription} = doctor;
  return (
    <MainContainer>
      <ImageContainer>
        {docImage}
      </ImageContainer>
      <Content>
        <Name>{docName}</Name>
        <Speciality>{docSpeciality}</Speciality>
        <Description>{docDescription}</Description>
      </Content>
    </MainContainer>
  )
}

export default DoctorDetailsInModal;