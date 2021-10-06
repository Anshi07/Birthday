
import { Navbar } from 'react-bootstrap';
import './navbar.css';
const CustomNavbar = () => {
  return (
    <Navbar className="justify-content-center" bg="dark" variant="dark" sticky="top" expand="lg" style={{ padding: "0px" }} >
      <Navbar.Brand >
        <img
          alt=""
          src="images/logo.jpg"
          width="60"
          height="60"
          className="d-inline-block align-top"

        />{' '}
        <p>Happy Birthday</p>
      </Navbar.Brand>

    </Navbar>
  );
};
export default CustomNavbar