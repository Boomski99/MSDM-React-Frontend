import { Form, FormControl, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";



const NavBar = () => {
    const username = "CEO"
    return ( 
       <Navbar bg="light" expand="xl">
           <NavbarBrand href="/"> <b>MSDM</b></NavbarBrand>
           <NavbarToggle aria-controls="basic-navbar-nav"></NavbarToggle>
           <NavbarCollapse id="basic-navbar-nav">
               <Nav className="mr-auto">
                   <Nav.Link href="/">Home</Nav.Link>
                   <Nav.Link href="/Karyawan">Karyawan</Nav.Link>
                   <Nav.Link href="#Departemen">Departement</Nav.Link>
                   <Nav.Link href="#">Jabatan</Nav.Link>
               </Nav>
               <Form inline>
                   <b>@{ username }</b>
               </Form>
           </NavbarCollapse>
       </Navbar>
    );
}
 
export default NavBar;