// Styled Components
import { Title } from './styled';

// Axios
import axios from '../../services/axios';

// Toastify
import { toast } from 'react-toastify';

// Redux
import { useSelector, useDispatch } from 'react-redux';

// Redux Actions
import * as LoginActions from '../../store/modules/login/actions.js';

export default function Login() {
  const msg = useSelector((state) => state.login.value);
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(LoginActions.ButtonClick());
    console.log(msg);
  };

  return (
    <div className="card">
      <Title $isRed={true}>Login</Title>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </div>
  );
}
