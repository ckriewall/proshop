import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Forms we create for user login will be passed in as children

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
