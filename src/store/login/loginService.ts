import Axios from 'axios';

export const getUsers = () => 
  Axios.get('http://localhost:3001/users');