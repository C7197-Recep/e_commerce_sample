import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomer, updateCustomer, fetchCustomers } from '../../redux/slices/customerSlice'; // Dosya yolu düzeltildi

const CustomerForm = ({ currentCustomer, setCurrentCustomer }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(currentCustomer || {
    Ad: '',
    Soyad: '',
    GSM: '',
    Firma: '',
    Adres: ''
  });

  useEffect(() => {
    if (currentCustomer) {
      setFormData(currentCustomer);
    }
  }, [currentCustomer]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentCustomer) {
      await dispatch(updateCustomer({ id: currentCustomer.id, customer: formData }));
      setCurrentCustomer(null);
    } else {
      await dispatch(addCustomer(formData));
    }
    setFormData({ Ad: '', Soyad: '', GSM: '', Firma: '', Adres: '' });
    dispatch(fetchCustomers()); // Güncelleme işlemi tamamlandıktan sonra verileri yeniden yükleyin
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Ad</label>
        <input type="text" className="form-control" name="Ad" value={formData.Ad} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Soyad</label>
        <input type="text" className="form-control" name="Soyad" value={formData.Soyad} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>GSM</label>
        <input type="text" className="form-control" name="GSM" value={formData.GSM} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Firma</label>
        <input type="text" className="form-control" name="Firma" value={formData.Firma} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Adres</label>
        <input type="text" className="form-control" name="Adres" value={formData.Adres} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">{currentCustomer ? 'Güncelle' : 'Ekle'}</button>
    </form>
  );
};

export default CustomerForm;
