import { Form, FormControl, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";


const NavBar = () => {
    const username = "CEO"
    return ( 
       <Navbar bg="light" expand="xl">
           <NavbarBrand href="#home"> <b>MSDM</b></NavbarBrand>
           <NavbarToggle aria-controls="basic-navbar-nav"></NavbarToggle>
           <NavbarCollapse id="basic-navbar-nav">
               <Nav className="mr-auto">
                   <Nav.Link href="#home">Home</Nav.Link>
                   <Nav.Link href="#link">Pegawai</Nav.Link>
                   <Nav.Link href="#Departemen">Departement</Nav.Link>
                   <Nav.Link href="#">Jabatan</Nav.Link>
               </Nav>
               <Form inline>
                   <b>{ username }</b>
               </Form>
           </NavbarCollapse>
       </Navbar>
    );
}
 
export default NavBar;