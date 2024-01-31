import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import LoginPage from './views/LoginPage';
import SignupPage from './views/SignUpPage';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/login" Component={LoginPage} />
            <Route path="/signup" Component={SignupPage} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
