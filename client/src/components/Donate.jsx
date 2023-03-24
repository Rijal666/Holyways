import { Container, Row, Col, Stack, ProgressBar, Button, Card } from 'react-bootstrap';

function Donate() {
  return (
    <Container fluid>
      <Row style={{ margin:"50px 100px"}}>
        <Col style={{display:"flex", flex:"wrap"}}>
        <Col >
            <img src="/image/adit.jpg" alt="img" style={{ width: "450px", height:"400px", top:"164px", marginLeft:"-12px" }} />
        </Col>
        <Col>
            <Col xs="4" className="mb-5" style={{width:"100%"}}>
                <Col style={{fontSize:"36px", fontWeight:"bold"}}>
                    BANTU ADIT CHOI 
                </Col>
                <Stack direction="horizontal" className="py-3">
                    <Col className="text-danger text-start" style={{fontSize:"25px", fontWeight:"bold"}}>
                        Rp.200.000
                    </Col>
                    <Col className="text-center" style={{fontSize:"18px", color:"#616161"}}>Gathered from </Col>
                    <Col className="text-secondary text-end" style={{fontSize:"25px", fontWeight:"bold"}}>
                        Rp.2000000000
                    </Col>
                </Stack>
                <ProgressBar variant="danger" max={100} now={5} />
                <Stack direction="horizontal">
                    <Col className="text-dark text-start mt-2" style={{fontSize:"18px", fontWeight:"bold"}}>
                        200 donation
                    </Col>
                    <Col className="text-dark text-end mt-2" style={{fontSize:"18px", fontWeight:"bold"}}>
                        200202
                    </Col>
                </Stack>
                <Col className="my-2" style={{ height: "9rem", fontSize:"18px" }}>
                    KESIAN UDAH SABRUT
                </Col>
                <Col className="text-secondary mt-1">
                    <Button variant="danger" className="text-light fw-bold w-100" >Donate</Button>
                </Col>
            </Col >
        </Col>
        </Col>
        <Card.Text style={{fontSize:"36px", fontWeight:"bold", marginRight:"-95px" }}>
            List Donation 200
        </Card.Text>
            <Row className="d-flex justify-content-start w-100 mx-3" style={{ height: "25vh", marginBottom:"20px", overflow:"auto" }}>
                <Col md={4} className="bg-white mt-3 rounded-2 mx-2" style={{ boxShadow: "0px 0px 5px grey", backgroundColor: "white", width: "97%" }}>
                    <Card.Text className="fw-bold py-0 mx-1" style={{fontSize:"30px"}}>
                        asep
                    </Card.Text>
                    <Card.Text className="fw-bold py-0 mx-1 fs-5">
                        minggu
                    </Card.Text>
                    <Row>
                        <Col sm={6} className="mx-1 fs-5 text-start" style={{color:"#974A4A"}}>100000000</Col>                           
                    </Row>
                </Col>
                <Col md={3} className="bg-white mt-3 rounded-2 mx-2" style={{ boxShadow: "0px 0px 5px grey", backgroundColor: "white", width: "97%" }}>
                    <Card.Text className="fw-bold py-0 mx-1" style={{fontSize:"30px"}}>
                        asep
                    </Card.Text>
                    <Card.Text className="fw-bold py-0 mx-1 fs-5">
                        minggu
                    </Card.Text>
                    <Row>
                        <Col sm={6} className="mx-1 fs-5 text-start" style={{color:"#974A4A"}}>100000000</Col>                           
                    </Row>
                </Col>
                <Col md={3} className="bg-white mt-3 rounded-2 mx-2" style={{ boxShadow: "0px 0px 5px grey", backgroundColor: "white", width: "97%" }}>
                    <Card.Text className="fw-bold py-0 mx-1" style={{fontSize:"30px"}}>
                        asep
                    </Card.Text>
                    <Card.Text className="fw-bold py-0 mx-1 fs-5">
                        minggu
                    </Card.Text>
                    <Row>
                        <Col sm={6} className="mx-1 fs-5 text-start" style={{color:"#974A4A"}}>100000000</Col>                           
                    </Row>
                </Col>
            </Row>
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
                    <Row>
                        <Col sm={6} className="mx-1 fs-5 text-start" style={{color:"#974A4A"}}>100000000</Col>                           
                    </Row>
                </Col>
                <Col md={3} className="bg-white mt-3 rounded-2 mx-2" style={{ boxShadow: "0px 0px 5px grey", backgroundColor: "white", width: "97%" }}>
                    <Card.Text className="fw-bold py-0 mx-1" style={{fontSize:"30px"}}>
                        asep
                    </Card.Text>
                    <Card.Text className="fw-bold py-0 mx-1 fs-5">
                        minggu
                    </Card.Text>
                    <Row>
                        <Col sm={6} className="mx-1 fs-5 text-start" style={{color:"#974A4A"}}>100000000</Col>                           
                    </Row>
                </Col>
                <Col md={3} className="bg-white mt-3 rounded-2 mx-2" style={{ boxShadow: "0px 0px 5px grey", backgroundColor: "white", width: "97%" }}>
                    <Card.Text className="fw-bold py-0 mx-1" style={{fontSize:"30px"}}>
                        asep
                    </Card.Text>
                    <Card.Text className="fw-bold py-0 mx-1 fs-5">
                        minggu
                    </Card.Text>
                    <Row>
                        <Col sm={6} className="mx-1 fs-5 text-start" style={{color:"#974A4A"}}>100000000</Col>                           
                    </Row>
                </Col>
            </Row>
      </Row>
    </Container>
  );
}

export default Donate;