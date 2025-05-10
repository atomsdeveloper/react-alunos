// Styled Components
import { Nav } from './styled';

// Redux
import * as Actions from '../../store/modules/auth/actions';

// Redux
import { useSelector, useDispatch } from 'react-redux';

// React Router
import { useNavigate } from 'react-router-dom';

// Router Dom
import { Link } from 'react-router-dom';

// Toastify
import { toast } from 'react-toastify';

// Icons
import {
  FaHome,
  FaUserAlt,
  FaRegistered,
  FaBookMedical,
  FaCircle,
  FaPowerOff,
} from 'react-icons/fa';

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = (e) => {
    e.preventDefault();

    toast.info('Você saiu do sistema.');
    dispatch(Actions.ButtonLoginClickFailure());
    navigate('/');
  };
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
      {isLoggedIn ? (
        <Link to="/logout" onClick={handleLogout} rel="noopener noreferrer">
          {/* <FaPowerOff size={24} color="#fff" /> */}
          Logout
        </Link>
      ) : (
        <Link to="/login" rel="noopener noreferrer">
          {/* <FaUserAlt size={24} color="#fff" /> */}
          Login
        </Link>
      )}

      {isLoggedIn && <FaCircle size={24} color="#fff" />}
    </Nav>
  );
}
