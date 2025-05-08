// Styled Component
import { Container } from '../../styles/GlobalStyles';

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
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.warn('E-mail não é válido.');
    }

    if (pass.length < 1 || pass.length > 100) {
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
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
}
