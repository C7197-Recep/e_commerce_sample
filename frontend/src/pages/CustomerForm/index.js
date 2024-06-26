// src/pages/CustomerForm/index.js
import React, { useEffect,  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { fetchCustomers, addCustomer, updateCustomer } from '../../redux/actions/customerActions'; 
import GModal from "../../components/Modal";

const CustomerForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const customers = useSelector(state => state.customers.customers);
  const currentCustomer = customers.find(customer => customer.id === id);

  // Modalı göstermek için
  const [showModal, setShowModal] = useState(false); 
  const [title, setTitle] = useState("Başarılı"); 
  const [message, setMessage] = useState("İşleminiz başarıyla tamamlandı."); 

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

    try{
    
    
    if (!validationSchema.isValidSync(values)) {

      /* Modal */
      setTitle("Hata!");
      setMessage("Bilgileri kontrol ediniz.");
      setShowModal(true);

      /* Formik */
      setSubmitting(false);

      return;
    }

    if (id) {
      dispatch(updateCustomer(id, values));
    } else {
      dispatch(addCustomer(values));
    }     
    
    /* Modal */
    setTitle("Başarılı!");
    setMessage("İşleminiz başarıyla tamamlandı.");
    setShowModal(true);
        
    // history.push('/customers');  
    setSubmitting(false);    
  }catch(error){
    /* Modal */
    setTitle("Hata!");
    setMessage(error.message);
    setShowModal(true);
  } 
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

          <GModal
            show={showModal}
            onHide={() => {
                setShowModal(false); 
                if (title=="Başarılı!"){
                  history.push('/customers');
                }
              }
            }
            title={title}
            message={message}
          />

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
