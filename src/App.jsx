// Services
import history from './services/history.js';

// Global Styles
import { GlobalStyles } from './styles/GlobalStyles.js';

// Router Dom
import { Router } from 'react-router-dom';

// Components
import Header from './components/Header';

// Routes
import RoutesClient from './routes/index.jsx';

function App() {
  return (
    <Router history={history}>
      <Header />
      <RoutesClient />
      <GlobalStyles />
    </Router>
  );
}

export default App;
