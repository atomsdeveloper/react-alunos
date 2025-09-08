import React from 'react';

// Link
import { useNavigate } from 'react-router-dom';

// Axios
import axios from '../../services/axios';

// Icons
import { PiTrash } from 'react-icons/pi';
import { FaUserCircle, FaExclamation } from 'react-icons/fa';
import { CiEdit } from 'react-icons/ci';

// Styled Component Global
import { Container } from '../../styles/GlobalStyles';

// Styled Components
import {
  ContainerStudents,
  ProfilePicture,
  LinkStyled,
  HeaderStudents,
  NewStudent,
  Table,
  Thead,
  Tbody,
} from './styled';

// Component
import Loading from '../../components/Loading';

// Lodash
import get from 'lodash.get';

// Toastify
import { toast } from 'react-toastify';

export default function Students() {
  const navigate = useNavigate();

  const [students, setStudents] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetch() {
      setIsLoading(true);

      try {
        const response = await axios.get('/students');
        setStudents(response.data.data);
        setIsLoading(false);
      } catch (error) {
        setStudents([]);
        throw new Error('Não foi possível buscar os estudantes.');
      }
    }

    fetch();
  }, []);

  const handleDeleteQuestion = (e) => {
    e.preventDefault();

    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'block');
    e.currentTarget.remove();
  };

  const handleDelete = async (e, id, index) => {
    e.persist();
    try {
      setIsLoading(true);
      await axios.delete(`students/${id}/delete`);
      const newStudents = [...students];
      newStudents.splice(index, 1);
      setStudents(newStudents); // <-- estava faltando atualizar o state
      setIsLoading(false);
    } catch (e) {
      const errors = get(e, 'response.data.message', []);
      toast.error(`${errors} você precisa fazer login para deletar.`);
      setIsLoading(false);
    }
  };

  const handleRouteCreateStudent = () => {
    navigate('/students/create');
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <HeaderStudents>
        <h1>Estudantes</h1>
        <NewStudent onClick={handleRouteCreateStudent}>Novo Aluno</NewStudent>
      </HeaderStudents>

      <ContainerStudents>
        <Table>
          <Thead>
            <tr>
              <th>Foto</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </Thead>
          <Tbody>
            {students?.map((student, index) => (
              <tr key={student.id}>
                <td>
                  <ProfilePicture>
                    {get(student, 'photos[0].url', false) ? (
                      <img src={student.photos[0].url} alt="" />
                    ) : (
                      <FaUserCircle size={36} />
                    )}
                  </ProfilePicture>
                </td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>
                  <LinkStyled to={`/students/${student.id}/edit`} $type="edit">
                    Editar
                    <CiEdit size={16} />
                  </LinkStyled>

                  <LinkStyled
                    $type="delete"
                    onClick={handleDeleteQuestion}
                    to={`/students/${student.id}/delete`}
                  >
                    {' '}
                    Apagar
                    <PiTrash size={16} />
                  </LinkStyled>

                  <FaExclamation
                    size={16}
                    display="none"
                    cursor="pointer"
                    onClick={(e) => handleDelete(e, student.id, index)}
                  />
                </td>
              </tr>
            ))}
          </Tbody>
        </Table>
      </ContainerStudents>
    </Container>
  );
}
