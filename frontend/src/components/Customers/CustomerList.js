import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers, deleteCustomer } from '../../redux/actions/customerActions';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const CustomerList = ({ setCurrentCustomer }) => {
  const dispatch = useDispatch();
  const { customers, loading, error } = useSelector(state => state.customers);
  const [query, setQuery] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

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

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
    const sortQuery = `?filter={"order": "${key} ${direction}"}`;
    dispatch(fetchCustomers(sortQuery));
  };

  const columns = [
    { dataField: 'Ad', text: sortConfig.key === "Ad" && sortConfig.direction === "asc" ? "Ad ▲" : "Ad ▼" , sort: true, headerStyle: { cursor: 'pointer' }, headerEvents: { onClick: () => handleSort('Ad') } },
    { dataField: 'Soyad', text: sortConfig.key === "Soyad" && sortConfig.direction === "asc" ? "Soyad ▲" : "Soyad ▼" , sort: true, headerStyle: { cursor: 'pointer' }, headerEvents: { onClick: () => handleSort('Soyad') } },
    { dataField: 'GSM', text: sortConfig.key === "GSM" && sortConfig.direction === "asc" ? "GSM ▲" : "GSM ▼" , sort: true, headerStyle: { cursor: 'pointer' }, headerEvents: { onClick: () => handleSort('GSM') } },
    { dataField: 'Firma', text: sortConfig.key === "Firma" && sortConfig.direction === "asc" ? "Firma ▲" : "Firma ▼" , sort: true, headerStyle: { cursor: 'pointer' }, headerEvents: { onClick: () => handleSort('Firma') } },
    { dataField: 'Adres', text: sortConfig.key === "Adres" && sortConfig.direction === "asc" ? "Adres ▲" : "Adres ▼" , sort: true, headerStyle: { cursor: 'pointer' }, headerEvents: { onClick: () => handleSort('Adres') } },
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

  const paginationOptions = {
    sizePerPage: 2,
    paginationTotalRenderer: (from, to, size) => (
      <span className="react-bootstrap-table-pagination-total">
        Gösteriliyor {from} ile {to} arası, toplam {size} kayıt
      </span>
    )
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
      <BootstrapTable
        bootstrap4
        keyField='id'
        data={customers}
        columns={columns}
        pagination={paginationFactory(paginationOptions)}
      />
    </div>
  );
};

export default CustomerList;
