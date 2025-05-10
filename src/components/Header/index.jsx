// Styled Components
import { Nav, Title, ListLinks } from './styled';

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
import { FaListOl, FaCircle, FaPowerOff } from 'react-icons/fa';
import { IoMdLogIn, IoMdCreate } from 'react-icons/io';

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
      <Title>AppSchool</Title>
      <ListLinks>
        <Link to="/" rel="noopener noreferrer">
          <FaListOl size={18} color="#fff" />
        </Link>
        {isLoggedIn && (
          <Link to="/register" rel="noopener noreferrer">
            <IoMdCreate size={18} color="#fff" />
          </Link>
        )}
        {isLoggedIn ? (
          <Link to="/logout" onClick={handleLogout} rel="noopener noreferrer">
            <FaPowerOff size={18} color="#fff" />
          </Link>
        ) : (
          <Link to="/login" rel="noopener noreferrer">
            <IoMdLogIn size={18} color="#fff" />
          </Link>
        )}

        {isLoggedIn && <FaCircle size={14} color="#54b659" />}
      </ListLinks>
    </Nav>
  );
}
