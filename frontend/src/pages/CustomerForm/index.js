// src/pages/CustomerForm/index.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { fetchCustomers, addCustomer, updateCustomer } from '../../redux/actions/customerActions'; 

const CustomerForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const customers = useSelector(state => state.customers.customers);
  const currentCustomer = customers.find(customer => customer.id === id);

  useEffect(() => {
    if (id && !currentCustomer) {
      dispatch(fetchCustomers());
    }
  }, [id, currentCustomer, dispatch]);

  const initialValues = currentCustomer || {
    Ad: '',
    Soyad: '',
    GSM: '',
    Firma: '',
    Adres: ''
  };

  const validationSchema = Yup.object({
    Ad: Yup.string().min(3, 'İsim çok kısa!').max(50, 'İsim çok uzun!').required('Ad gerekli'),
    Soyad: Yup.string().min(3, 'Soyad çok kısa!').max(15, 'İsim çok uzun!').required('Soyad gerekli'),
    GSM: Yup.string().matches(/^\d{10}$/, 'GSM 10 haneli olmalıdır').required('GSM gerekli'),
    Firma: Yup.string().min(3, 'Firma çok kısa!').max(15, 'İsim çok uzun!').required('Firma gerekli'),
    Adres: Yup.string().min(5, 'Adres çok kısa!').max(100, 'İsim çok uzun!').required('Adres gerekli'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    if (id) {
      dispatch(updateCustomer(id, values));
    } else {
      dispatch(addCustomer(values));
    }        
    history.push('/customers');  
    setSubmitting(false);     
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ isSubmitting }) => (
        <Form class="container mt-3">
          <div className="form-group">
            <label>Ad</label>
            <Field type="text" className="form-control" name="Ad" />
            <ErrorMessage name="Ad" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label>Soyad</label>
            <Field type="text" className="form-control" name="Soyad" />
            <ErrorMessage name="Soyad" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label>GSM</label>
            <Field type="text" className="form-control" name="GSM" />
            <ErrorMessage name="GSM" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label>Firma</label>
            <Field type="text" className="form-control" name="Firma" />
            <ErrorMessage name="Firma" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label>Adres</label>
            <Field type="text" className="form-control" name="Adres" />
            <ErrorMessage name="Adres" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {id ? 'Güncelle' : 'Ekle'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CustomerForm;
