import { Container,Row,Col,Card  } from 'react-bootstrap';

function ListDonation() {
  return (
    <Container fluid>
      <Row>
        <Col>
        <Card.Text style={{fontSize:"36px", fontWeight:"bold", marginRight:"-95px" }}>
            List Donation 200
        </Card.Text>
        <div>
            <Row className="d-flex justify-content-start w-100 mx-1" style={{height: "25vh", marginBottom:"20px" }}>
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
            </Row>
            
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ListDonation;