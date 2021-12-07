import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 07K_1oHm459CpM4cjJfKsv5nxudSGUhvtHPSpC1nLdc'
  }
})