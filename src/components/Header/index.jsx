// Styled Components
import { Nav } from './styled';

// Router Dom
import { Link } from 'react-router-dom';

// Icons
import { FaHome, FaUserAlt, FaRegistered, FaBookMedical } from 'react-icons/fa';

export default function Header() {
  return (
    <Nav>
      <Link to="/" rel="noopener noreferrer">
        {/* <FaBookMedical size={24} color="#fff" /> */}
        List Students
      </Link>
      <Link to="/register" rel="noopener noreferrer">
        {/* <FaRegistered size={24} color="#fff" /> */}
        Register
      </Link>
      <Link to="/login" rel="noopener noreferrer">
        {/* <FaUserAlt size={24} color="#fff" /> */}
        Login
      </Link>
    </Nav>
  );
}
