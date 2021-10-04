
import { Navbar } from 'react-bootstrap';
import './navbar.css';
const CustomNavbar = () => {
  return (
    <Navbar className="justify-content-center" bg="dark" variant="dark" sticky="top" style={{ padding: "0px", overflowX: "hidden" }} >
      <Navbar.Brand >
        <img
          alt=""
          src="images/logo.jpg"
          width="60"
          height="60"
          className="d-inline-block align-top"

        />{' '}
        <p className="text-center">Happy Birthday</p>
      </Navbar.Brand>

    </Navbar>
  );
};
export default CustomNavbar