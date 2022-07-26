import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Routes/HomePage';
import Character from './Routes/Character';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/character' element={<Character />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
