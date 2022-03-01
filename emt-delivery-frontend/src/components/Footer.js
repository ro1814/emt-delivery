import React from 'react'
import '../styles/FooterStyles.css'
import { Container, Row, Col, Nav } from "react-bootstrap";


const Footer = () => {
  return (
    <footer className='footerDiv'>
      <Container>
        <Row>
          <Col className="text-center py-3 footerText contactUs">
            
            <Nav target='_blank' href="">Copyright &copy; 360 FundInsight</Nav>
            
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer