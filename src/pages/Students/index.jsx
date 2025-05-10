import React from 'react';

// Link
import { Link } from 'react-router-dom';

// Axios
import axios from '../../services/axios';

// Icons
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaExclamation,
} from 'react-icons/fa';

// Styled Component Global
import { Container } from '../../styles/GlobalStyles';

// Styled Components
import { ContainerStudents, ProfilePicture, NewStudent } from './styled';

// Component
import Loading from '../../components/Loading';

// Loadash
import get from 'lodash.get';

// Toatify
import { toast } from 'react-toastify';

export default function Students() {
  const [students, setStudents] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetch() {
      try {
        setIsLoading(true);
        const response = await axios.get('/students');
        setStudents(response.data?.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetch();
  }, []);

  const handleDeleteQuestion = (e) => {
    e.preventDefault();

    // Pega o icone de exclamação
    const exclamation = e.currentTarget.nextSibling;
    // Set o atributo css para ser visualizado na página
    exclamation.setAttribute('display', 'block');
    // Remove o link atual que foi clicado.
    e.currentTarget.remove();
  };

  const handleDelete = async (e, id, index) => {
    e.persist();
    try {
      setIsLoading(true);
      await axios.delete(`students/${id}/delete`);
      const newStudents = [...students];
      newStudents.splice(index, 1);
      setIsLoading(false);
    } catch (e) {
      // console.log(e);
      const errors = get(e, 'response.data.message', []);

      toast.error(`${errors} você precisa fazer login para deletar.`);
      setIsLoading(false);
    }
  };
  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Students</h1>
      <NewStudent href="/students/create" color="#C3073F;">
        Novo Aluno
      </NewStudent>

      <ContainerStudents>
        {students?.map((student, index) => (
          <div key={student.id}>
            <ProfilePicture>
              {get(student, 'photos[0].url', false) ? (
                <img src={student.photos[0].url} alt="" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>
            <span>{student.name}</span>
            <span>{student.email}</span>

            {/* Update */}
            <Link to={`/students/${student.id}/edit`}>
              <FaEdit size={16} />
            </Link>

            {/* Delete */}
            <Link
              onClick={handleDeleteQuestion}
              to={`/students/${student.id}/delete`}
            >
              <FaWindowClose size={16} />
            </Link>

            <FaExclamation
              size={16}
              display="none"
              cursor="pointer"
              onClick={(e) => handleDelete(e, student.id, index)}
            />
          </div>
        ))}
      </ContainerStudents>
    </Container>
  );
}
