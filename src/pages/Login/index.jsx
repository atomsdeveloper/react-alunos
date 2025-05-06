import { Title } from './styled';

// Toastify
import { toast } from 'react-toastify';

export default function Login() {
  toast.success('Login successful!');
  toast.error('Login failed!');
  return (
    <div className="card">
      <Title $isRed={true}>Login</Title>
    </div>
  );
}
