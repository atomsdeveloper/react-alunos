// Services
import history from './services/history.js';

// Global Styles
import { GlobalStyles } from './styles/GlobalStyles.js';

// Toastify
import { ToastContainer } from 'react-toastify';

// Router Dom
import { BrowserRouter } from 'react-router-dom';

// Components
import Header from './components/Header';

// Routes
import RoutesClient from './routes/index.jsx';

// Redux
import { Provider } from 'react-redux';
import store from './store/index.js';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <GlobalStyles />
        <Header />
        <RoutesClient />
        <ToastContainer autoClose={3000} theme="dark" position="top-right" />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
