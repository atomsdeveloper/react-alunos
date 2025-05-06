// Navegation
import { Route, Routes } from 'react-router-dom';

// Route Personalization
import PrivateRoute from './PrivateRoute.jsx';

// Pages
import Login from '../pages/Login';
import Students from '../pages/Students';
import NotFound from '../pages/NotFound';

export default function RoutesClient() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/estudantes"
        element={
          <PrivateRoute isClosed>
            <Students />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
