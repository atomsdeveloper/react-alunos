// Navegation
import { Route, Routes } from 'react-router-dom';

// Route Personalization
import PrivateRoute from './PrivateRoute.jsx';

// Pages
import Login from '../pages/Login';
import Register from '../pages/Register';
import Students from '../pages/Students';
import Student from '../pages/Student';
import Photos from '../pages/Photos';
import NotFound from '../pages/NotFound';

export default function RoutesClient() {
  return (
    <Routes>
      <Route path="/" element={<Students />} />

      <Route
        path="/aluno/:id/edit"
        element={
          <PrivateRoute isClosed>
            <Student />
          </PrivateRoute>
        }
      />

      <Route
        path="/aluno"
        element={
          <PrivateRoute isClosed>
            <Student />
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

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
