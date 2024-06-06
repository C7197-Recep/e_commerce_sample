// redux/actions/customerActions.js
export const FETCH_CUSTOMERS_REQUEST = 'FETCH_CUSTOMERS_REQUEST';
export const FETCH_CUSTOMERS_SUCCESS = 'FETCH_CUSTOMERS_SUCCESS';
export const FETCH_CUSTOMERS_FAILURE = 'FETCH_CUSTOMERS_FAILURE';
export const ADD_CUSTOMER = 'ADD_CUSTOMER';
export const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER';
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';

const API_URL="http://localhost:3000/customers";

export const fetchCustomers = (query = '') => async dispatch => {

    dispatch({ type: 'FETCH_CUSTOMERS_REQUEST' });
    try {
      const response = await fetch(`${API_URL}${query}`);
      const data = await response.json();
      dispatch({ type: 'FETCH_CUSTOMERS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_CUSTOMERS_FAILURE', payload: error.message });
    }
  };
  
  export const addCustomer = customer => async dispatch => {
    const response = await fetch('${API_URL}', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customer)
    });
    const data = await response.json();
    dispatch({ type: 'ADD_CUSTOMER', payload: data });
  };
  
  export const updateCustomer = (id, customer) => async dispatch => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customer)
    });
    const data = await response.json();
    dispatch({ type: 'UPDATE_CUSTOMER', payload: data });
  };
  
  export const deleteCustomer = id => async dispatch => {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    dispatch({ type: 'DELETE_CUSTOMER', payload: id });
  };
  