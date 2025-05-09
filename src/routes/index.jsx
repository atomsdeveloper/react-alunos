// Navegation
import { Route, Routes } from 'react-router-dom';

// Route Personalization
import PrivateRoute from './PrivateRoute.jsx';

// Pages
import Login from '../pages/Login';
import Register from '../pages/Register';
import Students from '../pages/Students';
import Photos from '../pages/Photos';
import NotFound from '../pages/NotFound';

export default function RoutesClient() {
  return (
    <Routes>
      <Route path="/" element={<Students />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/students/:id/edit"
        element={
          <PrivateRoute isClosed>
            <h1>oi</h1>
          </PrivateRoute>
        }
      />

      <Route
        path="/fotos/:id"
        element={
          <PrivateRoute isClosed>
            <Photos />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
