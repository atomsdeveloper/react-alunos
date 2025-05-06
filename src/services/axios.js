import axios from 'axios';

export default axios.create({
  baseURL: 'https://crud-alunos-production-cc59.up.railway.app/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
