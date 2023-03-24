import { Button, Modal, Form } from "react-bootstrap";
import React from "react";

export const ModalDonate = (props) => {
  return (
    <>
      <Modal show={props.show} onHide={props.onHide} aria-labelledby="contained-modal-title-vcenter" centered>
        <div className="px-5 pb-3">
          <p className="fs-3 fw-bold" style={{ paddingTop: 45 }}>
            Login
          </p>
          <Form className="mt-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                className="p-2 mb-3"
                // onChange={OnChangeHandler}
                name="email"
                // value={email}
                type="email"
                placeholder="Email"
                style={{
                  backgroundColor: "rgba(188, 188, 188, 0.25)",
                  border: "2px solid #BCBCBC",
                }}
              />
              <Form.Control
                type="password"
                // onChange={OnChangeHandler}
                name="password"
                // value={password}
                placeholder="Password"
                style={{
                  backgroundColor: "rgba(188, 188, 188, 0.25)",
                  border: "2px solid #BCBCBC",
                }}
              />
            </Form.Group>
            <Button type="submit" className="fw-bold border-0 w-100 py-2 mt-3" style={{ backgroundColor: "#C32424" }}>
              Login
            </Button>
          </Form>

          <p className="text-center mt-3">
            Don't have an account ? Klik{" "}
            <span onClick={props.onClick} className="fw-bold" style={{ cursor: "pointer" }}>
              Here
            </span>
          </p>
        </div>
      </Modal>
    </>
  );
};

export default ModalDonate;
