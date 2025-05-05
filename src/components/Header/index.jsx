// Styled Components
import { Nav } from './styled';

// Icons
import { FaHome, FaUserAlt, FaSignOutAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <Nav>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <FaHome size={24} color="#fff" />
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <FaSignOutAlt size={24} color="#fff" />
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <FaUserAlt size={24} color="#fff" />
      </a>
    </Nav>
  );
}
