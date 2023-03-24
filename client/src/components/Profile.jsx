import { Button, Container } from "react-bootstrap";
import React, {  useState } from "react";
import UpdateProfile from "./UpdateProfile";

function Profile() {
    const [showUpdate, setShowUpdate] = useState(false);

    const handleClose = () => {
        setShowUpdate(false);
      };

      const handleShowUpdate = () => {
        handleClose(true);
        setShowUpdate(true);
      };

  return (
    <>
    <Container fluid>
        <div style={{margin:"50px 100px"}}>
        <h3 className="fw-bold" style={{ marginBottom: 26}}>My Profile</h3>
        <div className="d-flex">
            <div className="img-wrapper"  style={{width: 180, height: 221}}>
                <img src="/image/profile.png" style={{width: "100%"}} alt="profile" />
            </div>
            <div style={{marginLeft: 28}}>
                <div className="name">
                    <p className="fs-4 m-0 fw-bolder" style={{color: "#C32424"}}>Full Name</p>
                    <p className="fs-5 m-0" style={{color: "#616161"}} >adit ochoi</p>
                </div>
                
                <div className="email mt-3">
                    <p className="fs-4 m-0 fw-bolder" style={{color: "#C32424"}}>Email</p>
                    <p className="fs-5 m-0" style={{color: "#616161"}} >aditochoi@gmail.com</p>
                </div>

                <div className="email mt-3">
                    <p className="fs-4 m-0 fw-bolder" style={{color: "#C32424"}}>Phone</p>
                    <p className="fs-5 m-0" style={{color: "#616161"}} >09032983923232</p>
                </div>
            </div>
        </div>
        <Button as="input" type="submit" value="Update Profile" variant="danger" style={{margin:"10px 0", padding:"5px 39px"}} onClick={handleShowUpdate}/>
        </div>
    </Container>

    <UpdateProfile show={showUpdate} onHide={handleClose} />
</>
  );
}

export default Profile;