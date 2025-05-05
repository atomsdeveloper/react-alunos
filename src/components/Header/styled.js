import styled from 'styled-components';

// Global Colors
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background-color: ${primaryColor};
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

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
