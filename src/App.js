import { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { CHAMPIONS_LIST } from './CHAMPIONS_LIST';
import RandomTeam from './components/RandomTeam';
import { Link, Route, Routes } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

function App() {
  const [championsList, setChampionsList] = useState(CHAMPIONS_LIST)

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>Formula One</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/randomTeam'>Random Team</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route path='/' element={<HomePage championsList={championsList} />} />
          <Route path='/randomTeam' element={<RandomTeam RandomTeam={RandomTeam} />} />
        </Routes>
      </Container>
    </div>
    
  );
}

export default App;


