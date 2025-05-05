// Navegation
import { Routes, Route } from 'react-router-dom';

// Pages
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

export default function RoutesClient() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
