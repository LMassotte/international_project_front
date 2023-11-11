import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './assets/App.css';
import HomePage from './pages/HomePage.js';
import SignInPage from './pages/SignInPage.js';
import AccountPage from './pages/AccountPage.js';
import NavigationMenu from './components/NavigationMenu.js';

function App() {
  return (
    <Router>
      <div>
        <NavigationMenu />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
