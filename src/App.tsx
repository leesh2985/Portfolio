import styled from 'styled-components';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <MainContent>
        <p>Content goes here...</p>
      </MainContent>
    </BrowserRouter>
  );
}

const MainContent = styled.div`
  height: 100vh;
  margin: 0 auto;
  overflow-y: hidden;
  padding: 20px;
`;

export default App;
