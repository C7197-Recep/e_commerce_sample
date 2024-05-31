import React, { useState } from 'react';
import CustomerList from '../../components/Customers/CustomerList';
import CustomerForm from '../../components/Customers/CustomerForm';

const Customers = () => {
  const [currentCustomer, setCurrentCustomer] = useState(null);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Müşteri Yönetim Sistemi</h1>
      <CustomerForm currentCustomer={currentCustomer} setCurrentCustomer={setCurrentCustomer} />
      <CustomerList setCurrentCustomer={setCurrentCustomer} />
    </div>
  );
};

export default Customers;
