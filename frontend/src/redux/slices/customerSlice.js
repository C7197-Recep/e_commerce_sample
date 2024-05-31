import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Asenkron işlemler için thunk'lar
export const fetchCustomers = createAsyncThunk('customers/fetchCustomers', async (query = '') => {
  const response = await axios.get(`http://localhost:3000/customers${query}`);
  // const response = await axios.get(`http://localhost:3000/customers`, query);
  return response.data;
});

export const addCustomer = createAsyncThunk('customers/addCustomer', async (customer) => {
  const response = await axios.post('http://localhost:3000/customers', customer);
  return response.data;
});

export const updateCustomer = createAsyncThunk('customers/updateCustomer', async ({ id, customer }) => {
  const response = await axios.put(`http://localhost:3000/customers/${id}`, customer);
  return response.data;
});

export const deleteCustomer = createAsyncThunk('customers/deleteCustomer', async (id) => {
  await axios.delete(`http://localhost:3000/customers/${id}`);
  return id;
});

const customerSlice = createSlice({
  name: 'customers',
  initialState: {
    customers: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.loading = false;
        state.customers = action.payload;
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addCustomer.fulfilled, (state, action) => {
        state.customers.push(action.payload);
      })
      .addCase(updateCustomer.fulfilled, (state, action) => {
        const index = state.customers.findIndex(customer => customer.id === action.payload.id);
        state.customers[index] = action.payload;
      })
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        state.customers = state.customers.filter(customer => customer.id !== action.payload);
      });
  }
});

export default customerSlice.reducer;
