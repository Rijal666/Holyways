import {Container, Form, Button,} from 'react-bootstrap';
// import { useRef } from "react";
import Header from "../components/Header"

function MakeRaiseFund() {
    // const inputRef = useRef()

    // const handleUpload = () => {
    //     inputRef.current?.click();
    // }
  return (
    <>
    <Header />
    <Container fluid >
      <div style={{margin:"50px 100px"}}>
        <div>
            <p style={{ fontSize:"36px", fontWeight:"bold"}}>Make Raise Fund</p>
        </div>
        <div style={{marginTop:"50px"}}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Title" style={{ backgroundColor: "rgba(188, 188, 188, 0.25)",
                  border: "2px solid #BCBCBC",}} />
                </Form.Group>

                <Form.Group controlId="formFile" className=" p-1 ps-2 mt-3 bg-danger" style={{
                    borderRadius: 5,
                    width: 150,
                    height: 35,
              }}
            >
              <Form.Label className="d-flex">
                <div className="d-flex justify-content-between align-text-center">
                  <Form.Control name="photo" type="file" hidden  placeholder="Photo Product" cursor="pointer" />
                  <p style={{color:"white", cursor:"pointer"}}>
                    Attache Thumbnail
                  </p>
                </div>
              </Form.Label>
            </Form.Group>
                <Form.Group className="mb-3 mt-3" controlId="formBasicPassword" >
                    <Form.Control type="text" placeholder="Goals Donation" style={{ backgroundColor: "rgba(188, 188, 188, 0.25)",
                  border: "2px solid #BCBCBC",}} />
                </Form.Group>
                <div class="mb-3">
                    <textarea className="form-control p-2" name="description" placeholder="Description" id="description"style={{ 
                        height: 150, 
                        resize: "none", 
                        textColor: "#613D2B", 
                        backgroundColor: "rgba(188, 188, 188, 0.25)",
                        border: "2px solid #BCBCBC", }}
                    ></textarea>
                </div>
                <div style={{ display:"flex",justifyContent:"end"}}>
                <Button variant="danger" value="submit" style={{padding:"0 70px"}} type="submit" >
                    Public Fundraising
                </Button>
                </div>
            </Form>
        </div>
      </div>
    </Container>
    </>
  );
}
export default MakeRaiseFund;