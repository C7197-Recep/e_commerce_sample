import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CustomerList from '../../components/Customers/CustomerList';

const Customers = () => {
  const history = useHistory();
  const [currentCustomer, setCurrentCustomer] = useState(null);

  const handleAddCustomer = () => {
    history.push('/add-customer');
  };

  const handleEditCustomer = (customer) => {
    history.push(`/edit-customer/${customer.id}`);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Müşteri Yönetim Sistemi</h1>
      <Button className="btn btn-primary mb-3" onClick={handleAddCustomer}>Yeni Müşteri Ekle</Button>
      <CustomerList setCurrentCustomer={handleEditCustomer} />
    </div>
  );
};

export default Customers;
