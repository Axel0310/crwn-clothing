import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home.component.jsx'



function App() {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}

export default App;
