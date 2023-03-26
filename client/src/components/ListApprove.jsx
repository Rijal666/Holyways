import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import ModalApprove from '../components/ModalApprove';
import { useState } from 'react';

function ListApprove() {
    const [showApprove, setShowApprove] = useState(false);

    const handleClose = () => {
        setShowApprove(false);
    }

    const handleApprove = () => {
        handleClose(true);
        setShowApprove(true);
    }
  return (
    <>
    <Container fluid>
      <Row>
      <Row>
                <div className="text-center" style={{fontSize:"28px"}}>Load Mode</div>
                <Col  style={{fontSize:"36px", fontWeight:"bold", marginBottom:"10px"}}>
                    Donation has not been approved 10
                </Col>
            </Row>
            <Row className="d-flex justify-content-start w-100 mx-3 " style={{ height: "25vh", marginBottom:"20px", overflow:"auto" }}>
                <Col md={3} className="bg-white mt-3 rounded-2 mx-2" style={{ boxShadow: "0px 0px 5px grey", backgroundColor: "white", width: "97%" }}>
                    <Card.Text className="fw-bold py-0 mx-1" style={{fontSize:"30px"}}>
                        asep
                    </Card.Text>
                    <Card.Text className="fw-bold py-0 mx-1 fs-5">
                        minggu
                    </Card.Text>
                    <div className='d-flex mb-1'>
                        <p sm={6} className="mx-1 fs-5 text-start" style={{color:"#974A4A"}}>100000000</p>   
                        <Button style={{width:"100px"}} variant='danger' className='ms-auto' onClick={handleApprove} >View</Button>                                                  
                    </div>
                </Col>
                <Col md={3} className="bg-white mt-3 rounded-2 mx-2" style={{ boxShadow: "0px 0px 5px grey", backgroundColor: "white", width: "97%" }}>
                    <Card.Text className="fw-bold py-0 mx-1" style={{fontSize:"30px"}}>
                        asep
                    </Card.Text>
                    <Card.Text className="fw-bold py-0 mx-1 fs-5">
                        minggu
                    </Card.Text>
                    <div className='d-flex mb-1'>
                        <p sm={6} className="mx-1 fs-5 text-start" style={{color:"#974A4A"}}>100000000</p>   
                        <Button style={{width:"100px"}} variant='danger' className='ms-auto' onClick={handleApprove} >View</Button>                                                  
                    </div>
                </Col>
                
            </Row>
      </Row>
    </Container>
        <ModalApprove show={showApprove} onHide={handleClose} />
        </>

  );
}

export default ListApprove;