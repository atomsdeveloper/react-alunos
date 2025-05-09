import React from 'react';

// Styled Component Global
import { Container } from '../../styles/GlobalStyles';

// Styled Component
import { Form, LabelContainer } from './styled';

// React Router
import { useNavigate } from 'react-router-dom';

// Validator
import isEmail from 'validator/lib/isEmail';

// Tostify
import { toast } from 'react-toastify';

// Redux
import { useDispatch } from 'react-redux';

// Auth
import * as Actions from '../../store/modules/auth/actions';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPass] = React.useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.warn('E-mail não é válido.');
    }

    if (password.length < 1 || password.length > 100) {
      formErrors = true;
      toast.warn('Campo senha precisa ter entre 12 e 100 caracteres.');
    }

    if (formErrors) return;

    dispatch(Actions.ButtonLoginClickRequest({ email, password }));
  }

  return (
    <Container>
      <h1>Login</h1>

      <Form onSubmit={handleSubmit}>
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
            onChange={(e) => setPass(e.target.value)}
            placeholder="Digite suas senha..."
            aria-label="Campo para inserir a senha de login."
            autoComplete="password"
          />
        </LabelContainer>
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
}
