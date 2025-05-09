import React from 'react';

// Link
import { Link } from 'react-router-dom';

// Axios
import axios from '../../services/axios';

// Icons
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';

// Styled Component Global
import { Container } from '../../styles/GlobalStyles';

// Styled Components
import { ContainerStudents, ProfilePicture } from './styled';

// Loadash
import get from 'lodash.get';
import Loading from '../../components/Loading';

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

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Students</h1>

      <ContainerStudents>
        {students?.map((student) => (
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
              <FaEdit />
            </Link>

            {/* Delete */}
            <Link to={`/students/${student.id}/delete`}>
              <FaWindowClose />
            </Link>
          </div>
        ))}
      </ContainerStudents>
    </Container>
  );
}
