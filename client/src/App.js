import CodeSnippet from './components/routersComponents';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <CodeSnippet />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
