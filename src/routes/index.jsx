// Navegation
import { Routes } from 'react-router-dom';

// Route Personalization
import MyRoute from './myRoute.jsx';

// Pages
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

export default function RoutesClient() {
  return (
    <Routes>
      <MyRoute exact path="/" element={<Login />} />
      <MyRoute path="*" element={<NotFound />} />
    </Routes>
  );
}
