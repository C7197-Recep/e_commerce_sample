import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers, deleteCustomer } from '../../redux/actions/customerActions';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const CustomerList = ({ setCurrentCustomer }) => {
  const dispatch = useDispatch();
  const { customers, loading, error } = useSelector(state => state.customers);
  const [query, setQuery] = useState('');

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    const searchQuery = `?filter={"where":{"or":[{"Ad":{"like":"${query}"}},{"Soyad":{"like":"${query}"}},{"GSM":{"like":"${query}"}},{"Firma":{"like":"${query}"}},{"Adres":{"like":"${query}"}}]}}`;
    dispatch(fetchCustomers(searchQuery));
  };

  const handleDelete = (id) => {
    dispatch(deleteCustomer(id));
  };

  const columns = [
    { dataField: 'Ad', text: 'Ad', sort: true },
    { dataField: 'Soyad', text: 'Soyad', sort: true },
    { dataField: 'GSM', text: 'GSM', sort: true },
    { dataField: 'Firma', text: 'Firma', sort: true },
    { dataField: 'Adres', text: 'Adres', sort: true },
    {
      dataField: 'actions',
      text: 'İşlemler',
      formatter: (cell, row) => (
        <div>
          <button onClick={() => setCurrentCustomer(row)} className="btn btn-warning btn-sm" style={{ marginRight: "20px" }}>Düzenle</button>
          <button onClick={() => handleDelete(row.id)} className="btn btn-danger btn-sm">Sil</button>
        </div>
      )
    }
  ];

  const defaultSorted = [{
    dataField: 'Ad',
    order: 'asc'
  }];

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
      <BootstrapTable
        bootstrap4
        keyField='id'
        data={customers}
        columns={columns}
        defaultSorted={defaultSorted}
        pagination={paginationFactory()}
      />
    </div>
  );
};

export default CustomerList;
