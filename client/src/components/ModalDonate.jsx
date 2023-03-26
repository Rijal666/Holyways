import { Button, Modal, Form } from "react-bootstrap";
import React, { useContext, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { UserContext } from "../context/userContext";
import { API, setAuthToken } from "../config/api";

export const ModalDonate = (props) => {
  const Navigate = useNavigate();
  const [_, dispatch] = useContext(UserContext);
  const [formDonate, setFormDonate] = useState({
    donate: "",
  });

  const  donate  = formDonate;

  const OnChangeHandler = (e) => {
    setFormDonate({
      ...formDonate,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Insert data for login process, you can also make this without any configuration, because axios would automatically handling it.
      const response = await API.post("/login", formDonate);

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
        title: 'Donate Failed',
        showConfirmButton: false,
        timer: 1500
      })
      console.log("Donate failed : ", error);
    }
    props.onHide();
  });

  return (
    <>
      <Modal show={props.show} onHide={props.onHide} aria-labelledby="contained-modal-title-vcenter" centered>
        <div className="px-5 pb-3">
          <Form className="mt-4" onSubmit={(e) => handleSubmit.mutate(e)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                className="p-2 mb-3"
                // onChange={OnChangeHandler}
                name="email"
                // value={email}
                type="int"
                placeholder="Nominal Donation"
                style={{
                  backgroundColor: "rgba(188, 188, 188, 0.25)",
                  border: "2px solid #BCBCBC",
                }}
              />

            <div className=" w-100">
                <Button variant="danger">Attach Payment <img src="/image/payment.png" alt="#"/></Button>
            </div>

            </Form.Group>
            <Button type="submit" className="fw-bold border-0 w-100 py-2 mt-3 bg-danger">
              Donate
            </Button>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default ModalDonate;
