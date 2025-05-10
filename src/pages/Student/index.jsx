import React from 'react';

// Styled Component
import { Container } from '../../styles/GlobalStyles';

// Styles
import { Form, LabelContainer, Title } from './styled';

// Component
import Loading from '../../components/Loading';

// Axios
import axios from '../../services/axios';

// React Router
import { useNavigate, Link } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';
import * as Actions from '../../store/modules/auth/actions';

// Toastify
import { toast } from 'react-toastify';

// Validator
import { isEmail, isFloat } from 'validator';

// Lodash
import get from 'lodash.get';

// Icons
import { FaEdit, FaUserCircle } from 'react-icons/fa';

// Types
import PropTypes from 'prop-types';

export default function Student({ match }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const id = get(match, 'params.id', null);

  const [name, setName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [age, setAge] = React.useState('');
  const [weight, setWeight] = React.useState(0);
  const [height, setHeight] = React.useState('');

  const [photo, setPhoto] = React.useState('');

  const [isLoading, setIsLoading] = React.useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (!name) {
      formErrors = true;
      toast.warn('Campo nome não pode ser nulo.');
    }

    if (!age) {
      formErrors = true;
      toast.warn('Campo idade não pode ser nulo.');
    }

    if (name.length < 3 || name.length > 100) {
      formErrors = true;
      toast.warn('Campo nome precisa ter entre 3 e 100 caracteres.');
    }

    if (lastName.length < 3 || lastName.length > 100) {
      formErrors = true;
      toast.warn('Campo sobrenome precisa ter entre 3 e 100 caracteres.');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.warn('E-mail não é válido.');
    }

    if (!isFloat(height)) {
      formErrors = true;
      toast.warn('Altura não é válida.');
    }

    if (!isFloat(weight)) {
      formErrors = true;
      toast.warn('Peso não é válido.');
    }

    if (!idStorage && (pass.length < 1 || pass.length > 100)) {
      formErrors = true;
      toast.warn('Campo senha precisa ter entre 12 e 100 caracteres.');
    }

    if (formErrors) return;

    try {
      setIsLoading(true);
      if (id) {
        await axios.put(`/students/${id}/edit`, {
          name,
          lastName,
          email,
          birthdate: age,
          weight,
          height,
        });
        toast.success('Editado com sucesso.');
      } else {
        const { data } = await axios.put(`/students/create`, {
          name,
          lastName,
          email,
          birthdate: age,
          weight,
          height,
        });
        toast.success('Criado com sucesso.');
        navigate(`/students/${data.id}/edit`);
      }
      setIsLoading(false);
    } catch (error) {
      const status = get(err, 'response.status', '');
      const data = get(err, 'response.data.data', {});
      const errors = get(err, 'response.data.data.errors', []);

      if (errors.length > 0) errors.map((err) => toast.error(err));

      if (status === 401) dispatch(Actions.ButtonLoginClickFailure());
    }
  }

  React.useEffect(() => {
    if (!id) return;

    async function fetch() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/students/${id}`);
        const photo = get(data, 'Photo[0].url', '');
        setPhoto(photo);

        setName(data.name);
        setLastName(data.lastname);
        setEmail(data.email);
        setWeight(data.weight);
        setAge(data.birthdate);
        setHeight(data.height);

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const status = get(err, 'response.status', 0);
        const errors = get(err, 'response.data.data.error', []);

        if (status === 400) errors.map((err) => toast.error(err));
        navigate('/');
      }
    }

    fetch();
  }, [id]);

  return (
    <Container>
      <Loading isLoading={isLoading} />

      {id ? <Title>Edit Student</Title> : <Title>Created Student</Title>}

      {id && (
        <div>
          {photo ? (
            <img src={photo} alt={`Foto do estudante ${name}`} />
          ) : (
            <FaUserCircle size={180} />
          )}
          <Link to={`/photo/${id}`}>
            <FaEdit size={24} />
          </Link>
        </div>
      )}

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
            minLength={3}
          />
        </LabelContainer>
        <LabelContainer>
          <LabelContainer>
            <label htmlFor="lastname">Sobrenome:</label>
            <input
              id="lastname"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Digite seu sobrenome..."
              aria-label="Campo para inserir o seu sobrenome."
              autoComplete="lastname"
              minLength={3}
            />
          </LabelContainer>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail..."
            aria-label="Campo para inserir o seu e-mail ."
            autoComplete="email"
          />
        </LabelContainer>
        <LabelContainer>
          <label htmlFor="weight">Peso:</label>
          <input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Digite seu peso..."
            aria-label="Campo para inserir a sua peso."
            autoComplete="number"
          />
        </LabelContainer>
        <LabelContainer>
          <label htmlFor="birthdate">Data de Nascimento:</label>
          <input
            id="birthdate"
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Digite sua data de nascimento..."
            aria-label="Campo para inserir a sua data de nascimento."
          />
        </LabelContainer>
        <LabelContainer>
          <label htmlFor="height">Altura:</label>
          <input
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Digite sua altura..."
            aria-label="Campo para inserir a sua altura."
            autoComplete="number"
          />
        </LabelContainer>

        <button type="submit">{isLoggedIn ? 'Salvar' : 'Registrar'}</button>
      </Form>
    </Container>
  );
}
Student.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
