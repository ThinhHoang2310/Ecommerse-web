import axiosClient from './axiosClient';

const createOrder = async data => {
   return await axiosClient.post('/orders', data);
};

const getDetailOrder = async id => {
   return await axiosClient.post('/orders/${id}', data);
};

export { createOrder, getDetailOrder };
