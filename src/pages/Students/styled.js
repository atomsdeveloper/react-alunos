import styled from 'styled-components';

// React Router
import { Link } from 'react-router-dom';

export const ContainerStudents = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }

  div + div {
    border-top: solid 1px #eee;
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export const NewStudent = styled(Link)`
  display: block;
  padding: 10px 0;
  color: #c3073f;
`;
