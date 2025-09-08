import React from 'react';

// Styled Component Global
import { Container } from '../../styles/GlobalStyles';

// Styled Components
import { Form, LabelContainer } from './styled';

// Component
import Loading from '../../components/Loading';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../../store/modules/auth/actions';

// Toastify
import { toast } from 'react-toastify';

// Validator
import { isEmail } from 'validator';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useSelector((state) => console.log('State', state));

  const idStorage = useSelector((state) => state.auth.user.id);
  const nameStorage = useSelector((state) => state.auth.user.name);
  const emailStorage = useSelector((state) => state.auth.user.email);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useEffect(() => {
    if (!idStorage) return;

    setName(nameStorage);
    setEmail(emailStorage);
  }, [idStorage, nameStorage, emailStorage]);

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

    if (!idStorage && (pass.length < 1 || pass.length > 100)) {
      formErrors = true;
      toast.warn('Campo senha precisa ter entre 12 e 100 caracteres.');
    }

    if (formErrors) return;

    dispatch(
      Actions.ButtonRegisterClickRequest({ idStorage, name, email, password })
    );

    navigate('/login');
  }

  return (
    <Container>
      <Loading isLoading={isLoggedIn && isLoading} />

      {isLoggedIn ? <h1>Edite a sua conta</h1> : <h1>Crie sua conta</h1>}

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

        <button type="submit">{isLoggedIn ? 'Salvar' : 'Registrar'}</button>
      </Form>
    </Container>
  );
}
