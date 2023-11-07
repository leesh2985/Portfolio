import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from './page/Container';
import About from './page/About';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Container />} />
          Container
          <Route path="/container" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
