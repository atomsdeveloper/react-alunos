import React from 'react';

// Axios
import axios from '../../services/axios';

// Lodash
import get from 'lodash.get';

// Styled Component Global
import { Container } from '../../styles/GlobalStyles';

// Styled Components
import { Form, LabelContainer } from './styled';

// Components
import Loading from '../../components/Loading';

// React Router
import { useNavigate } from 'react-router-dom';

// Toastify
import { toast } from 'react-toastify';

// Validator
import { isEmail } from 'validator';

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [isLoading, setIsLoading] = React.useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (!name) {
      formErrors = true;
      toast.warn('Campo nome não pode ser nulo.');
    }

    if (name.length < 3 || name.length > 100) {
      formErrors = true;
      toast.warn('Campo nome precisa ter entre 3 e 100 caracteres.');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.warn('E-mail não é válido.');
    }

    if (pass.length < 1 || pass.length > 100) {
      formErrors = true;
      toast.warn('Campo senha precisa ter entre 12 e 100 caracteres.');
    }

    if (formErrors) return;
    setIsLoading(true);

    try {
      const response = await axios.post('/users/create', {
        name,
        password,
        email,
      });

      const { data, message, success } = response.data;

      if (success) {
        toast.success(`Usuário ${data.name} ${message}`);
      }

      setIsLoading(false);
      navigate('/login');
    } catch (e) {
      const errors = get(e, 'response.data.data.erros', []);

      errors && errors.map((err) => toast.error(err));
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Crie sua conta</h1>

      <Form onSubmit={handleSubmit}>
        <LabelContainer>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome..."
            aria-label="Campo para inserir o seu nome."
            autoComplete="name"
          />
        </LabelContainer>
        <LabelContainer>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail..."
            aria-label="Campo para inserir o seu e-mail de login."
            autoComplete="email"
          />
        </LabelContainer>
        <LabelContainer>
          <label htmlFor="pass">Senha:</label>
          <input
            id="pass"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha..."
            aria-label="Campo para inserir a sua senha de login"
            autoComplete="current-password"
            minLength={12}
          />
        </LabelContainer>

        <button type="submit">Registrar</button>
      </Form>
    </Container>
  );
}
