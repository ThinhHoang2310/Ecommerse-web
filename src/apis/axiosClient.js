import axios from 'axios';

const axiosClient = axios.create({
   baseURL: 'https://be-project-reactjs.vercel.app/api/v1',
   headers: {
      'Content-Type': 'application/json',
   },
});

export default axiosClient;