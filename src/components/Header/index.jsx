// Styled Components
import { Nav, Title, ListLinks } from './styled';

// Redux
import * as Actions from '../../store/modules/auth/actions';

// Redux
import { useSelector, useDispatch } from 'react-redux';

// React Router
import { useNavigate, Link } from 'react-router-dom';

// Toastify
import { toast } from 'react-toastify';

// Icons
import { FaCircle, FaReact } from 'react-icons/fa';
import { CgLogOut } from 'react-icons/cg';
import { IoMdLogIn } from 'react-icons/io';
import { PiStudent, PiLock } from 'react-icons/pi';

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
      <Title>
        <FaReact size={36} />
      </Title>
      <ListLinks>
        <Link to="/" rel="noopener noreferrer">
          <PiStudent size={18} color="#fff" />
        </Link>
        {isLoggedIn && (
          <Link to="/register" rel="noopener noreferrer">
            <PiLock size={18} color="#fff" />
          </Link>
        )}
        {isLoggedIn ? (
          <Link to="/logout" onClick={handleLogout} rel="noopener noreferrer">
            <CgLogOut size={18} color="#fff" />
          </Link>
        ) : (
          <Link to="/login" rel="noopener noreferrer">
            <IoMdLogIn size={18} color="#fff" />
          </Link>
        )}

        {isLoggedIn && <FaCircle size={8} color="#54b659" />}
      </ListLinks>
    </Nav>
  );
}
