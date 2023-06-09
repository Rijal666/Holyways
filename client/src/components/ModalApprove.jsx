import { Button, Modal, Form } from "react-bootstrap";
import React, { useContext, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { UserContext } from "../context/userContext";
import { API, setAuthToken } from "../config/api";

export const Approve = (props) => {
  const Navigate = useNavigate();
  const [_, dispatch] = useContext(UserContext);
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formLogin;

  const OnChangeHandler = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Insert data for login process, you can also make this without any configuration, because axios would automatically handling it.
      const response = await API.post("/login", formLogin);

      console.log("login success : ", response);

      // Send data to useContext
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data.data,
      });

      setAuthToken(response.data.data.token);

      // Status check
      if (response.data.data.is_admin === true) {
        Navigate("/MyRaiseFund");
      }
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Login Success',
        showConfirmButton: false,
        timer: 1500
      })
    } catch (error) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Login Failed',
        showConfirmButton: false,
        timer: 1500
      })
      console.log("login failed : ", error);
    }
    props.onHide();
  });

  return (
    <>
      <Modal show={props.show} onHide={props.onHide} aria-labelledby="contained-modal-title-vcenter" centered>
        <div className="px-5 pb-3">
          <p className="fs-3 fw-bold" style={{ paddingTop: 45 }}>
            Nama Kamu
          </p>
          <Form className="mt-4" onSubmit={(e) => handleSubmit.mutate(e)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                className="p-2 mb-3"
                // onChange={OnChangeHandler}
                name="email"
                // value={email}
                type="int"
                placeholder="200000"
                style={{
                  backgroundColor: "rgba(188, 188, 188, 0.25)",
                  border: "2px solid #BCBCBC",
                }}
              />

            <div className="bg-danger w-100">
                <img src="/image/struct.png" style={{width:"100%", left:"34px", top:"153px" }} />
            </div>

            </Form.Group>
            <Button type="submit" className="fw-bold border-0 w-100 py-2 mt-3" style={{ backgroundColor: "#C32424" }}>
              Login
            </Button>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default Approve;
