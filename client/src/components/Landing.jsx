import { Row, Col, Card, Button, Container } from 'react-bootstrap';

function Landing() {
  return (
    <Container fluid style={{marginBottom:"50px" }}>
      <Row style={{backgroundColor:"#dc3545", minHeight:"33rem"}}>
        <Col md={{ span: 7, offset: 1 }} className="text-light">
            <Card.Text className="fw-bold mt-4" style={{ fontSize: "50px" }}>
                While you are still standing, try to reach out to the people who are falling.
            </Card.Text>
            <Card.Text className="fs-6 my-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Card.Text>
            <a href='#donate'>
                <Button variant="light" className="text-danger mx-1 fw-bold w-25  my-3">Donate Now</Button>
            </a>
        </Col>
        <Col>
            <img src="/image/image1.png" alt="#"  width="409px" height="580px" style={{position:"absolute", marginTop:"50px", marginRight:"50px"}} />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 4 }}>
        <img src="/image/image2.png" alt="#"  width="380vh" height="550vh" style={{position:"absolute", marginTop:"-5rem", marginLeft:"-12px"}} />
        </Col>
        <Col md={{ span: 6, offset: 2 }} className="mx-0" style={{ marginTop: "9rem" }}>
            <Col style={{fontWeight:"bold", fontSize:"48px"}}>
                Your donation is very helpful for people affected by forest fires in Kalimantan.
            </Col>
            <Row>
                <Col direction="vertical" className="fs-6 mt-3 pe-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Col>
                <Col direction="vertical" className="fs-6 mt-3">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </Col>
            </Row>
        </Col>
      </Row>
      <Row>
      <Card.Title className="fw-bold fs-1 text-center" style={{color:"#dc3545"}}>Donate Now</Card.Title>
      </Row>
    </Container>
  );
}

export default Landing;