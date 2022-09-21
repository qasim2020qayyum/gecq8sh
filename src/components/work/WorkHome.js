import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';

const WorkHome = () => {
  return (
    <>
    <h1 className='about_heading'>Our Work</h1>
    <div className='team contactus'>
        
        
        <div className='team_card'>
        
        <MDBCard alignment='center'>
        <MDBCardBody>
          <MDBCardTitle>STEEL BUILDINGS</MDBCardTitle>
          <MDBCardText>Work related to Design, Fabrication and Eraction</MDBCardText>
          <MDBBtn color="success" href='#'>Steel Buildings</MDBBtn>
        </MDBCardBody>
      </MDBCard>

        </div>
        <div className='team_card'>
        
        <MDBCard alignment='center'>
        <MDBCardBody>
          <MDBCardTitle>LAND SCAPE</MDBCardTitle>
          <MDBCardText>Work related to Soft Land Scape and Hard Land Scape</MDBCardText>
          <MDBBtn color="success" href='#'>Land Scapes</MDBBtn>
        </MDBCardBody>
      </MDBCard>

        </div>
        </div>
    </>
  )
}

export default WorkHome