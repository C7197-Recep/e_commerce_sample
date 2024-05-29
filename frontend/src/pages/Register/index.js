import React from 'react';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const CONTAINER = styled.div`
  background: #F7F9FA;
  height: auto;
  width: 90%;
  margin: 5em auto;
  color: snow;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);

  @media(min-width: 786px) {
    width: 60%;
  }

  label {
    color: #24B9B6;
    font-size: 1.2em;
    font-weight: 400;
  }

  .error {
    border: 2px solid #FF6565;
  }

  .error-message {
    color: #FF6565;
    padding: .5em .2em;
    height: 1em;
    position: absolute;
    font-size: .8em;
  }

  h1 {
    color: #24B9B6;
    padding-top: .5em;
  }

  .form-group {
    margin-bottom: 2.5em;
  }
`;

const MYFORM = styled(Form)`
  width: 90%;
  text-align: left;
  padding-top: 2em;
  padding-bottom: 2em;

  @media(min-width: 786px) {
    width: 50%;
  }
`;

const BUTTON = styled(Button)`
  background: #1863AB;
  border: none;
  font-size: 1.2em;
  font-weight: 400;

  &:hover {
    background: #1D3461;
  }
`;

// RegEx for phone number validation
const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

// Schema for yup
const validationSchema = Yup.object().shape({
  Ad: Yup.string()
  .min(2, "*En az 2 karakter")
  .max(15, "*En fazla 15 karakter")
  .required("*Zorunlu"),
  Soyad: Yup.string()
  .min(2, "*En az 2 karakter")
  .max(15, "*En fazla 15 karakter")
  .required("*Zorunlu"),
  GSM: Yup.string()
  .matches(phoneRegExp, "*Uygun bir numara değil")
  .required("*Zorunlu"),
  Firma: Yup.string()
  .min(2, "*En az 2 karakter")
  .max(15, "*En fazla 15 karakter")
  .required("*Zorunlu"),
  Adres: Yup.string()
  .min(2, "*En az 2 karakter")
  .max(100, "*En fazla 100 karakter")
  .required("*Zorunlu"),
});

const Register = () => {
  return(
    <CONTAINER>
    <h1 style={{paddingLeft: "20px"}}>Kayıt Ekle</h1>
    <Formik
      initialValues={{ Ad:"", Soyad:"", GSM:"", Firma:"", Adres:""}}
      validationSchema={validationSchema}
      onSubmit={(values, {setSubmitting, resetForm}) => {
          // When button submits form and form is in the process of submitting, submit button is disabled
          setSubmitting(true);

          // Simulate submitting to database, shows us values submitted, resets form
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            fetch("http://localhost:3000/customers", {
              // body: '{ "Ad": "string", "Soyad": "string",  "Firma": "string", "GSM": "string", "Adres": "string"}',
              body: JSON.stringify(values),
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
              },
              method: "POST"
            })
            
            // axios.post('http://localhost:3000/customers', `${values}`,
            //   {
            //   headers: {
            //     // Overwrite Axios's automatically set Content-Type
            //     'Content-Type': 'application/json'
            //   }
            //   })
            //   .then(response => {
            //     console.log(response.data);
            //   })
            //   .catch(error => {
            //     console.error(error);
            //   });

            // const requestOptions = {
            //     method: 'POST',
            //     mode: "cors",
            //     headers: {
            //         "Accept": "application/json",
            //         "Content-Type": "application/json",
            //     },
            //     body: values
            // };
            // fetch('http://www.localhost:3000/customers', requestOptions)
            // .then(function (response) {
            //   console.log(response.json());
            // })
            
            // resetForm();
            setSubmitting(false);
          }, 500);
      }}
    >
      {( {values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting }) => (
        <MYFORM onSubmit={handleSubmit} className="mx-auto">
          <Form.Group controlId="formAd">
            <Form.Label>Ad :</Form.Label>
            <Form.Control
              type="text"
              name="Ad"
              placeholder="Ad"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Ad}
              className={touched.Ad && errors.Ad ? "has-error" : null}
              />
              {touched.Ad && errors.Ad ? (
                <div className="error-message">{errors.Ad}</div>
              ): null}
          </Form.Group>
          <Form.Group controlId="formSoyad">
            <Form.Label>Soyad :</Form.Label>
            <Form.Control
              type="text"
              name="Soyad"
              placeholder="Soyad"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Soyad}
              className={touched.Soyad && errors.Soyad ? "has-error" : null}
               />
               {touched.Soyad && errors.Soyad ? (
                 <div className="error-message">{errors.Soyad}</div>
               ): null}
          </Form.Group>
          <Form.Group controlId="formGSM">
            <Form.Label>GSM :</Form.Label>
            <Form.Control
              type="text"
              name="GSM"
              placeholder="GSM"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.GSM}
              className={touched.GSM && errors.GSM ? "has-error" : null}
               />
             {touched.GSM && errors.GSM ? (
                 <div className="error-message">{errors.GSM}</div>
               ): null}
          </Form.Group>
          <Form.Group controlId="formFirma">
            <Form.Label>Firma :</Form.Label>
            <Form.Control
              type="text"
              name="Firma"
              placeholder="Firma"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Firma}
              className={touched.Firma && errors.Firma ? "has-error" : null}
              />
            {touched.Firma && errors.Firma ? (
                <div className="error-message">{errors.Firma}</div>
              ): null}
          </Form.Group>
          <Form.Group controlId="formAdres">
            <Form.Label>Adres :</Form.Label>
            <Form.Control
              type="text"
              name="Adres"
              placeholder="Adres"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Adres}
              className={touched.Adres && errors.Adres ? "has-error" : null}
              />
            {touched.Adres && errors.Adres ? (
                <div className="error-message">{errors.Adres}</div>
              ): null}
          </Form.Group>
          {/*Submit button that is disabled after button is clicked/form is in the process of submitting*/}
          <BUTTON variant="primary" type="submit" disabled={isSubmitting}>
            Submit
          </BUTTON>
        </MYFORM>
      )}
    </Formik>
    </CONTAINER>
  );
}

export default Register;