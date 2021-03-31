import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';

import NavBar from './Navbar'
import Home from './Home'

function App() {
  return (
      <Container>
        <NavBar />
        <Home />
      </Container>
  );  
}

export default App;
