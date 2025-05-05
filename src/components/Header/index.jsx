// Styled Components
import { Nav } from './styled';

// Router Dom
import { Link } from 'react-router-dom';

// Icons
import { FaHome, FaUserAlt, FaSignOutAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <Nav>
      <Link to="/" target="_blank" rel="noopener noreferrer">
        <FaHome size={24} color="#fff" />
      </Link>
      <Link to="/login" target="_blank" rel="noopener noreferrer">
        <FaSignOutAlt size={24} color="#fff" />
      </Link>
      <Link to="" target="_blank" rel="noopener noreferrer">
        <FaUserAlt size={24} color="#fff" />
      </Link>
    </Nav>
  );
}
