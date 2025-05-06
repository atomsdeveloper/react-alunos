// Styled Components
import { Title } from './styled';

// Axios
import axios from '../../services/axios';

// Toastify
import { toast } from 'react-toastify';

export default function Login() {
  React.useEffect(() => {
    document.title = 'Login';

    async function fetchData() {
      try {
        const response = await axios.get('/alunos');
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  toast.success('Login successful!');
  toast.error('Login failed!');
  return (
    <div className="card">
      <Title $isRed={true}>Login</Title>
    </div>
  );
}
