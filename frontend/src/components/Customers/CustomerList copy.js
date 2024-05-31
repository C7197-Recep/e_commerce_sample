import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers, deleteCustomer } from '../../redux/slices/customerSlice';

const CustomerList = ({ setCurrentCustomer }) => {
  const dispatch = useDispatch();
  const { customers, loading, error } = useSelector(state => state.customers);
  const [query, setQuery] = useState('');

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    dispatch(fetchCustomers(`?q=${e.target.value}`));
  };

  const handleDelete = (id) => {
    dispatch(deleteCustomer(id));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Arama..."
        value={query}
        onChange={handleSearch}
      />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Ad</th>
            <th>Soyad</th>
            <th>GSM</th>
            <th>Firma</th>
            <th>Adres</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.Ad}</td>
              <td>{customer.Soyad}</td>
              <td>{customer.GSM}</td>
              <td>{customer.Firma}</td>
              <td>{customer.Adres}</td>
              <td>
                <button onClick={() => setCurrentCustomer(customer)} className="btn btn-warning btn-sm">Düzenle</button>
                <button onClick={() => handleDelete(customer.id)} className="btn btn-danger btn-sm">Sil</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
