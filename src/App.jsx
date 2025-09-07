import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component.jsx'
import Header from './routes/header/header.component.jsx';
import './App.scss';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Header />} >
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
