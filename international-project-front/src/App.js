import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage.js';
import SignInPage from './pages/SignInPage.js';
import AccountPage from './pages/AccountPage.js';
import NavigationMenu from './components/NavigationMenu.js';
import DiscoverPage from './pages/DiscoverPage.js';
import ProjectCreationPage from './pages/ProjectCreationPage.js';

function App() {
  return (
    <Router>
      <div>
        <NavigationMenu />
        <div className='main-page'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/discoverPage" element={<DiscoverPage />} />
            <Route path="/projectCreationPage" element={<ProjectCreationPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
