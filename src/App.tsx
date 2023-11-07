import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from './page/Container';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Container />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
