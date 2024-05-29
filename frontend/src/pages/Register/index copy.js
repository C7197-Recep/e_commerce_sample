import React, { Component }  from 'react';
import { Form, Container, Row, Col, Button } from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css"; 



const Register = () => ( 
<Container>
<Form className='mt-4'>
 <Form.Row>
  <Form.Group as={Col} controlId="ad">
    <Form.Label>Ad</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>

  <Form.Group as={Col} controlId="soyad">
    <Form.Label>Soyad</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>
  </Form.Row>

  <Form.Row> 
    <Form.Group as={Col} controlId="firma">
      <Form.Label>Firma</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="gsm">
      <Form.Label>GSM</Form.Label>
      <Form.Control />
    </Form.Group>
    </Form.Row>

    <Form.Row> 
    <Form.Group as={Col} controlId="adres">
      <Form.Label>Adres</Form.Label>
      <Form.Control />
    </Form.Group>

  </Form.Row>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>
); 

export default Register;
