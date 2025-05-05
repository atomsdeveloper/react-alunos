// Global Styles
import { GlobalStyles } from './styles/GlobalStyles.js';

// Components
import Header from './components/Header';

// Pages
import Login from './pages/Login';

function App() {
  return (
    <>
      <Header />
      <Login />
      <GlobalStyles />
    </>
  );
}

export default App;
