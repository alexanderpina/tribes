import Axios from 'axios';

export const getTopics = () => 
  Axios.get('http://localhost:3001/topics');

export const removeTopicCategory = (id: number) => 
  Axios.delete(`http://localhost:3001/topics/categories/${id}`);