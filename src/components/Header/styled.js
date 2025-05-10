import styled from 'styled-components';

// Global Colors
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background-color: ${primaryColor};
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #fff;
    margin: 0 1rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #000;
      transform: scale(1.1);
    }
  }
`;

export const ListLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Title = styled.h1`
  color: #fff;
`;
