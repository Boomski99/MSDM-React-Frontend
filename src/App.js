import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from './Navbar'

import Home from './Home'
import Karyawan from './Karyawan'

function App() {
  return (
    <Router>
      <Container>
        <NavBar />
        <br></br>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Karyawan">
              <Karyawan />
            </Route>
          </Switch>
      </Container>
    </Router>
  );  
      
}

export default App;
