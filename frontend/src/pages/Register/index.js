import React from 'react';
import { Form, Container, Row, Col, Button } from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css"; 

import ReactDOM from 'react-dom';
import { Formik, Field } from 'formik';


const Register = () => ( 

    const formik = useFormik({
        initialValues: {
          email: '',
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    
      const validate = values => {
        const errors = {};
        if (!values.ad) {
          errors.ad = 'Required';
        } else if (values.ad.length > 5) {
          errors.ad = 'Must be 5 characters or less';
        }
      
        if (!values.lastName) {
          errors.lastName = 'Required';
        } else if (values.lastName.length > 20) {
          errors.lastName = 'Must be 20 characters or less';
        }
      
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
      
        return errors;
      };
    
<Container>
<Form className='mt-4' onSubmit={formik.handleSubmit}>
 <Form.Row>
  <Form.Group as={Col} controlId="ad">
    <Form.Label>Ad</Form.Label>
    <Form.Control placeholder="" 
     id="ad"
     type="text"
     onChange={formik.handleChange}
     value={formik.values.ad}
     />
  </Form.Group>
  {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
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
