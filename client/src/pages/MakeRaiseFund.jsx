import {Container, Form, Button,} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header"
import { useState } from "react";
import { useMutation } from "react-query"
import { API } from '../config/api';
import Swal from "sweetalert2";

function MakeRaiseFund() {
    let navigate = useNavigate();
    const [imageUrl, setImageUrl] = useState("/image/placeholder.png");
    const [formMakeFund, setformMakeFund] = useState ({
        id: 0,
        title: "",
        thumbnail: "",
        goals: "",
        description: "",
    })

// handle change data on form
    const handleChange = (e) => {
        setformMakeFund({
            ...formMakeFund,
            [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value
        });

        // create image url for preview
        if (e.target.type === "file") {
            let url = URL.createObjectURL(e.target.files[0]);
            setImageUrl(url);
        }
    };

    const submitMakeFund = useMutation(async (e) => {
        try {
            e.preventDefault();

            // config
            const config = {
                header: {
                    "Content-type": "multipart/form-data"
                },  
            };
            // Store data with FormData as object
            const formData = new FormData();
            formData.set("title", formMakeFund.title);
            formData.set("thumbnail", formMakeFund.thumbnail[0], formMakeFund.thumbnail[0].title);
            formData.set("goals", formMakeFund.goals);
            formData.set("description", formMakeFund.description);

            // insert raise data
            const response = await API.post("/funding", formData, config);
            console.log("add Funding Success : ", response);

            navigate("/MyRaiseFund");
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Add Funding Success",
                showConfirmButton: false,
                timer: 1500,
              });
            } catch (error) {
              Swal.fire({
                position: "center",
                icon: "error",
                title: "Add Funding Failed",
                showConfirmButton: false,
                timer: 1500,
              });
              console.log("add Funding failed : ", error);
            }
        });
  return (
    <>
    <Header />
    <Container fluid >
      <div style={{margin:"0px 100px"}}>
        <div>
            <p style={{ fontSize:"36px", marginTop:"50px",fontWeight:"bold"}}>Make Raise Fund</p>
        </div>
        <div style={{marginTop:"50px"}}>
            <Form onSubmit={(e) => submitMakeFund.mutate(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Title" name="title" value={formMakeFund.title} onChange={handleChange} id="title" style={{ backgroundColor: "rgba(188, 188, 188, 0.25)",
                  border: "2px solid #BCBCBC",}} />
                </Form.Group>

                <div style={{display:"flex", gap:"20px"}}>
                <Form.Group controlId="formFile" className=" p-1 ps-2 mt-3 bg-danger" style={{
                    borderRadius: 5,
                    width: 150,
                    height: 35,
                }}
            >
              <Form.Label className="d-flex">
                <div className="d-flex justify-content-between align-text-center">
                  <Form.Control name="thumbnail" onChange={handleChange} type="file" hidden  placeholder="Photo Product" cursor="pointer" />
                  <p style={{color:"white", cursor:"pointer"}}>
                    Attache Thumbnail
                  </p>
                </div>
              </Form.Label>
            </Form.Group>
                <div >
                  <img src={imageUrl} style={{ width: "70px", height:"70px" }} alt="imageadmin" />
                </div>
                </div>

                <Form.Group className="mb-3 mt-3" controlId="formBasicPassword" >
                    <Form.Control type="text" placeholder="Goals Donation" name="goals" onChange={handleChange} value={formMakeFund.goals} style={{ backgroundColor: "rgba(188, 188, 188, 0.25)",
                  border: "2px solid #BCBCBC",}} />
                </Form.Group>
                <div class="mb-3">
                    <textarea className="form-control p-2" name="description" onChange={handleChange} value={formMakeFund.description} placeholder="Description" id="description"style={{ 
                        height: 150, 
                        resize: "none", 
                        textColor: "#613D2B", 
                        backgroundColor: "rgba(188, 188, 188, 0.25)",
                        border: "2px solid #BCBCBC", }}
                    ></textarea>
                </div>
                <div style={{ display:"flex", justifyContent:"end"}}>
                    <div >
                    <Button variant="danger" value="submit" style={{padding:"0 70px", marginTop:"50px"}} type="submit" >
                    Public Fundraising
                    </Button>
                    </div>
                </div>
            </Form>
        </div>
      </div>
    </Container>
    </>
  );
}
export default MakeRaiseFund;