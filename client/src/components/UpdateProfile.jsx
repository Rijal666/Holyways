import { Button, Modal, Form } from "react-bootstrap";
import React from "react";

export const UpdateProfile = (props) => {
  return (
    <>
      <Modal show={props.show} onHide={props.onHide} aria-labelledby="contained-modal-title-vcenter" centered>
        <div className="px-5 pb-3">
          <p className="fs-3 fw-bold text-center" style={{ paddingTop: 45 }}>
            Edit Profile
          </p>
          <Form className="mt-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                className="p-2 mb-3"
                // onChange={OnChangeHandler}
                name="fullname"
                // value={email}
                type=""
                placeholder="Fullname"
                style={{
                  backgroundColor: "rgba(188, 188, 188, 0.25)",
                  border: "2px solid #BCBCBC",
                }}
              />
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
                type="text"
                // onChange={OnChangeHandler}
                name="phone"
                // value={password}
                placeholder="Phone"
                style={{
                  backgroundColor: "rgba(188, 188, 188, 0.25)",
                  border: "2px solid #BCBCBC",
                }}
              />
              <Form.Group
              controlId="formFile"
              className=" p-1 ps-3 mt-3"
              style={{
                backgroundColor: "rgba(188, 188, 188, 0.25)",   
                border: "2px solid #BCBCBC",
                borderRadius: 5,
                width: 200,
                height: 40,
              }}
            >
              <Form.Label className="d-flex">
                <div className="d-flex justify-content-between align-text-center">
                  <Form.Control name="photo" type="file" hidden  placeholder="Photo Product" cursor="pointer" />
                  <p>
                    Photo Profile
                  </p>
                </div>
                <div className="ms-auto pe-3 mb-3">
                  <img src="/image/paperclip.png" alt="" width="20px" />
                </div>
              </Form.Label>
            </Form.Group>
            </Form.Group>
            <Button type="submit" className="fw-bold border-0 w-100 py-2 mt-3" style={{ backgroundColor: "#C32424" }}>
              Save Change
            </Button>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default UpdateProfile;
