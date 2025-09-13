import axios from 'axios';

export default axios.create({
  baseURL: 'https://crud-alunos-production-5e4f.up.railway.app/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
