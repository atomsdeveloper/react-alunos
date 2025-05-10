import React from 'react';

// Styled Component
import { Container } from '../../styles/GlobalStyles';

// Styles
import { Form, LabelContainer, ProfilePicture, Title } from './styled';

// Component
import Loading from '../../components/Loading';

// Axios
import axios from '../../services/axios';

// React Router
import { useNavigate, Link, useParams } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../store/modules/auth/actions';

// Toastify
import { toast } from 'react-toastify';

// Validator
import { isEmail, isFloat } from 'validator';

// Lodash
import get from 'lodash.get';

// Icons
import { FaEdit, FaUserCircle } from 'react-icons/fa';

export default function Student() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [name, setName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [age, setAge] = React.useState('');
  const [weight, setWeight] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  const [photo, setPhoto] = React.useState('');

  const [isLoading, setIsLoading] = React.useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (!name) {
      formErrors = true;
      toast.warn('Campo nome não pode ser nulo.');
    }

    const birthdate = new Date(age);

    if (isNaN(birthdate.getTime())) {
      toast.error('Data de nascimento inválida.');
      return;
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
    if (!isFloat(String(height))) {
      formErrors = true;
      toast.warn('Altura não é válida.');
    }

    if (!isFloat(String(weight))) {
      formErrors = true;
      toast.warn('Peso não é válido.');
    }

    if (formErrors) return;

    try {
      setIsLoading(true);
      if (id) {
        await axios.put(`/students/${id}/edit`, {
          name,
          lastName,
          email,
          birthdate: new Date(age).getTime(),
          weight,
          height,
        });
        toast.success('Editado com sucesso.');
      } else {
        const { data } = await axios.post(`/students/create`, {
          name,
          lastName,
          email,
          birthdate: new Date(age).getTime(),
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

        // Converte 'new Date' para número.
        const birthdateTimestamp = get(data.data, 'birthdate', '');
        const birthdateString = birthdateTimestamp
          ? new Date(birthdateTimestamp).toISOString().split('T')[0]
          : '';

        const photo = get(data.data, 'photos[0].url', '');
        setPhoto(photo);

        setName(data.data.name);
        setLastName(data.data.lastname);
        setEmail(data.data.email);
        setWeight(data.data.weight);
        setAge(birthdateString);
        setHeight(data.data.height);

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

      {id ? <Title>Edit Student</Title> : <Title>Create Student</Title>}

      {id && (
        <ProfilePicture>
          {photo ? (
            <img src={photo} alt={`Foto do estudante ${name}`} />
          ) : (
            <FaUserCircle size={180} />
          )}
          <Link to={`/photo/${id}`}>
            <FaEdit size={24} />
          </Link>
        </ProfilePicture>
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
          />
        </LabelContainer>
        <LabelContainer>
          <label htmlFor="weight">Peso:</label>
          <input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
            placeholder="Digite seu peso..."
            aria-label="Campo para inserir a sua peso."
          />
        </LabelContainer>
        <LabelContainer>
          <label htmlFor="birthdate">Idade</label>
          <input
            id="birthdate"
            type="date"
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
            onChange={(e) => setHeight(parseFloat(e.target.value))}
            placeholder="Digite sua altura..."
            aria-label="Campo para inserir a sua altura."
          />
        </LabelContainer>

        <button type="submit">{isLoggedIn ? 'Salvar' : 'Registrar'}</button>
      </Form>
    </Container>
  );
}
