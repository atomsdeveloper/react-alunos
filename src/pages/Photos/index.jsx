// Styled Component
import { Container } from '../../styles/GlobalStyles';

// Styled
import { Title, Form, LabelContainer } from './styled';

// Axios
import axios from '../../services/axios';

// Redux
import { useDispatch } from 'react-redux';
import * as Actions from '../../store/modules/auth/actions';

// React Router
import { useNavigate } from 'react-router-dom';

// Loadash
import get from 'lodash.get';

// Components
import Loading from '../../components/Loading';

// Toastify
import { toast } from 'react-toastify';

// Types
import PropTypes from 'prop-types';

export default function Photos({ match }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const id = get(match, 'params.id', '');

  const [isLoading, setIsLoading] = React.useState(false);
  const [photo, setPhoto] = React.useState('');

  React.useEffect(() => {
    async function fetch() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/students/${id}`);
        setPhoto(get(data, 'Photo[0].url', ''));
        setIsLoading(false);
      } catch (error) {
        toast.error('Error a obter imagem.');
        setIsLoading(false);
        navigate('/');
      }
    }
    fetch();
  }, [id]);

  async function handleChange(e) {
    const photo = e.target.files[0];
    const photoUrl = URL.createObjectURL(photo);

    setPhoto(photoUrl);

    const formData = new FormData();
    formData.append('stundent_id', id);
    formData.append('file', photo);

    try {
      setIsLoading(true);
      await axios.post('/photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Foto enviada com sucesso.');
      setIsLoading(false);
    } catch (error) {
      const status = get(error, 'response.data', '');
      toast.error('Erro ao enviar arquivo');

      if (status === 401) dispatch(Actions.ButtonLoginClickFailure());
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Title>Photos</Title>

      <Form>
        <LabelContainer>
          <label htmlFor="photo">
            {photo ? <img src={photo} alt="Foto" /> : 'Selecionar'}
            <input
              id="photo"
              type="file"
              onChange={handleChange}
              placeholder="Digite seu nome..."
              aria-label="Campo para inserir o seu arquivos."
              autoComplete="name"
            />
          </label>
        </LabelContainer>
      </Form>
    </Container>
  );
}
Photos.propTypes = {
  matche: PropTypes.shape({}).isRequired,
};
