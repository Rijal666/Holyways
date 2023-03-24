import { Container, Navbar, Button, Nav, NavDropdown }from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { UserContext } from "../context/userContext"
import React, {  useState, useContext, useEffect } from "react";
import { API, setAuthToken } from "../config/api"
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister"




function Header() {
    let navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    // Redirect Auth but just when isLoading is false
    if (!isLoading) {
      if (state.isLogin === false) {
        navigate("/");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      checkUser();
    } else {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");
      console.log("check user success : ", response);
      // Get user data
      let payload = response.data.data;
      // Get token from local storage
      payload.token = localStorage.token;
      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
      setIsLoading(false);
    } catch (error) {
      console.log("check user failed : ", error);
      dispatch({
        type: "AUTH_ERROR",
      });
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  const handleShowLogin = () => {
    handleClose(true);
    setShowLogin(true);
  };

  const handleShowRegister = () => {
    handleClose(true);
    setShowRegister(true);
  };

    const logout = () => {
        console.log(state);
        dispatch({
          type: "LOGOUT",
        });
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logout Success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
        // window.location.reload();
      };

  return (
    <>
    <Navbar bg="danger">
      <Container>
        <Navbar.Brand href="/">
            <img src="/image/icon.png" alt="#" />
        </Navbar.Brand>
       
        <Navbar.Collapse className="justify-content-end">

            {state.isLogin === true ? (
                state.user.is_admin === true ? (
                    <Nav className="ms-auto gap-3">
                  <NavDropdown title={<img src="/image/profileh.png" alt="" style={{ content: "none" }} />}>
                    <NavDropdown.Item href="/add-product">
                      <img src="/image/RaiseFund.png" alt="" style={{ width: 40, height: 38.17 }} />
                      <span className="ms-2 fw-bold">Raise Fund Product</span>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logout}>
                      <img src="/image/Logout.png" alt="" style={{ width: 40, height: 38.17 }} />
                      <span className="ms-2 fw-bold">Logout</span>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                ) : (
                    <Nav className="ms-auto gap-3">
                    <NavDropdown title={<img src="/image/profileh.png" alt="" />}>
                      <NavDropdown.Item href="/my-transaction">
                        <img src="/image/Profilek.png" alt="" style={{ width: 40, height: 38.17 }} />
                        <span className="ms-2 fw-bold">Profil</span>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={logout}>
                        <img src="/image/Logout.png" alt="" style={{ width: 40, height: 38.17 }} />
                        <span className="ms-2 fw-bold">Logout</span>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                )
            ) : (
          <Nav className="ms-auto gap-3">
            <NavLink to="">
              <Button as="input" type="submit" value="Login" variant="danger" style={{marginRight:"20px"}} onClick={handleShowLogin}  />
            </NavLink>
            <NavLink to="">
              <Button as="input" type="submit" value="Register" variant="light" style={{color:"#dc3545"}} onClick={handleShowRegister}/>
            </NavLink>
          </Nav>
            )}

        </Navbar.Collapse>
      </Container>
    </Navbar>

    <ModalLogin show={showLogin} onHide={handleClose} onClick={handleShowRegister} />
    <ModalRegister show={showRegister} onHide={handleClose} onClick={handleShowLogin} />
    </>
  );
}

export default Header;