import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers, deleteCustomer } from '../../redux/slices/customerSlice';

const CustomerList = ({ setCurrentCustomer }) => {
  const dispatch = useDispatch();
  const { customers, loading, error } = useSelector(state => state.customers);
  const [query, setQuery] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    const searchQuery = `?filter={
      "where":{
                "or":[
                  {"Ad":{"like":"${query}"}},
                  {"Soyad":{"like":"${query}"}},
                  {"GSM":{"like":"${query}"}},
                  {"Firma":{"like":"${query}"}},
                  {"Adres":{"like":"${query}"}}
                ]
              }
      }`;
    dispatch(fetchCustomers(searchQuery));
  };

  const handleDelete = (id) => {
    dispatch(deleteCustomer(id));
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
    const sortQuery = `?filter={"order": "${key} ${direction}"}`;
    dispatch(fetchCustomers(sortQuery));
  };

  const getSortIndicator = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'asc' ? '▲' : '▼';
    }
    return '';
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ marginTop: "20px", marginBottom: "20px" }}>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Arama..."
        value={query}
        onChange={handleInput}
      />
      <button onClick={handleSearch} className="btn btn-primary btn-md" style={{ float: "right" }}>Ara</button>
      <br /><br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th onClick={() => handleSort('Ad')}>Ad {getSortIndicator('Ad')}</th>
            <th onClick={() => handleSort('Soyad')}>Soyad {getSortIndicator('Soyad')}</th>
            <th onClick={() => handleSort('GSM')}>GSM {getSortIndicator('GSM')}</th>
            <th onClick={() => handleSort('Firma')}>Firma {getSortIndicator('Firma')}</th>
            <th onClick={() => handleSort('Adres')}>Adres {getSortIndicator('Adres')}</th>
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
                <button onClick={() => setCurrentCustomer(customer)} className="btn btn-warning btn-sm" style={{ marginRight: "20px" }}>Düzenle</button>
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
