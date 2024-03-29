import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../styles/FormContinerStyles.css'

const FormContainer = ({ children }) => {
    return (
        <Container className='formDiv'>
            <Row className='justify-content-md-center'>
                <Col xs={12} md={6}>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default FormContainer
