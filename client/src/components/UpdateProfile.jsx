import { Button, Modal, Form } from "react-bootstrap";
import React,{ useState } from "react";
import {  useMutation } from "react-query";
import { API } from "../config/api";
import Swal from "sweetalert2"
import { Navigate } from "react-router-dom";

export const UpdateProfile = (props) => {
  const [imageUrl, setImageUrl] = useState("/image/placeholder.png");
  const [formUpdateProfile, setFormProfile] = useState({
    photo: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormProfile({
      ...formUpdateProfile,
      [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value,
    });
    console.log(formUpdateProfile)

    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setImageUrl(url);
    }
  }

  const handleSubmit = useMutation(async (e) => {
    try {
      e.prefentDefault();

      const config = {
        header: {
          "Content-type": "multipart/form-data",
        },
      };
      const formData = new FormData();
    
      formData.set("photo", formUpdateProfile.photo[0]);
      formData.set("phone", formUpdateProfile.phone);
        console.log(formData)
      const response = await API.post("/profil", formData, config);
      console.log("add Funding Success : ", response);
      Swal.fire({
        position:"center",
        icon:"success",
        title:"Update Profile success",
        showConfirmButton: false,
        timer: 1500,
      });
      Navigate("/MyProfile");
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Update Profile Failed",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log("Update Profile failed : ", error);
    }
  });

  return (
    <>
      <Modal show={props.show} onHide={props.onHide} aria-labelledby="contained-modal-title-vcenter" centered>
        <div className="px-5 pb-3">
          <p className="fs-3 fw-bold text-center" style={{ paddingTop: 45 }}>
            Edit Profile
          </p>
          <Form className="mt-4" onSubmit={(e) => handleSubmit.mutate(e)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              
              <Form.Control
                type="text"
                onChange={handleChange}
                name="phone"
                value={formUpdateProfile?.phone}
                placeholder="Phone"
                style={{
                  backgroundColor: "rgba(188, 188, 188, 0.25)",
                  border: "2px solid #BCBCBC",
                }}
                />
                <div style={{display:"flex", gap:"20px", marginTop:"20px"}}>
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
                  <Form.Control name="photo" type="file" onChange={handleChange} hidden  placeholder="Photo Product" cursor="pointer" />
                  <p>
                    Photo Profile
                  </p>
                </div>
                <div className="ms-auto pe-3 mb-3">
                  <img src="/image/paperclip.png" alt="" width="20px" />
                </div>
              </Form.Label>
            </Form.Group>
              <img src={imageUrl} alt="poto" style={{ width: "70px", height:"70px" }}/>
            </div>
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
