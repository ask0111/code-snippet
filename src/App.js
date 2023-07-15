import logo from './logo.svg';
import InputCode from './components';
import CodeInput from './components/codeInput/codeInput';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/test' element={<InputCode />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
