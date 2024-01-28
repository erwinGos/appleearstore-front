import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
