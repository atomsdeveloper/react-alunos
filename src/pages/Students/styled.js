import styled from 'styled-components';

import * as Colors from '../../config/colors';

import { Link } from 'react-router-dom';

export const ContainerStudents = styled.section`
  margin-top: 20px;
`;

export const Table = styled.table`
  width: 100%;

  border-collapse: collapse;

  border-radius: 4px;
  overflow: hidden;

  th,
  td {
    height: 70px;
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    vertical-align: middle;
  }

  td:first-child,
  th:first-child {
    text-align: center;
    width: 80px;
  }

  td:last-child,
  th:last-child {
    text-align: center;
    width: 200px;
  }

  tbody tr:hover {
    background: #f9f9f9;
  }

  img {
    max-width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }

  svg {
    margin-left: 6px;
    cursor: pointer;
  }
`;

export const Thead = styled.thead`
  width: 100%;

  background: #f5f5f5;

  th {
    font-weight: 600;
    font-size: 14px;
    color: #333;
  }
`;

export const Tbody = styled.tbody`
  width: 100%;

  td:last-child {
    display: flex;
    align-items: center;
    gap: 1rem; /* espaçamento horizontal */
    justify-content: center; /* centraliza os ícones na célula */
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;

  font-size: small;
  font-weight: bold;

  padding: 0.3rem 0.8rem;
  border-radius: 12px;

  color: ${Colors.primaryColorLight};

  background-color: ${({ $type }) =>
    $type === 'delete' ? Colors.delColorButton : Colors.infoColorButton};

  &:hover {
    filter: brightness(0.9);
    transition:
      background-color 0.3s ease-in-out,
      color 0.3s ease-in-out;
  }
`;

export const HeaderStudents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NewStudent = styled.button`
  width: 100px;
  display: block;
  padding: 10px 0;
`;
