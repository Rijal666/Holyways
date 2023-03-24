import { Container, Card, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import { Link } from "react-router-dom"

function Cards() {
  return (
    <Container fluid>
        <Row className="justify-content-center" style={{margin:"0 10px"}}>
            <Col md={4} sm={6} xs={12} id="donate" className="mt-5 ">
                <Card className="shadow bg-white">
                    <Card.Img src="/image/Pcard1.png" variant="top" alt="images" className="w-100" style={{ height: "15rem"}} />
                    < Card.Body className="py-1 px-4" >
                        {/* <Col className="mt-1 text-secondary" style={{ width: "auto" }}>
                        Author : {"  "}
                        <label>{items?.user?.fullname}</label>
                        </Col> */}
                        <Col className="mb-1 mt-3 py-0 fs-5 fw-bold">
                            The Strength of a People. Power of Community
                        </Col>
                        <Col className="my-3 py-0 text-muted">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Col>
                        <ProgressBar variant="danger" max={100} now={20} className="my-3" />
                        <Row className="d-flex mb-2">
                            <Col className="text-dark fw-bold text-start align-self-center" style={{fontSize:"15px"}}>
                                Rp.200.000
                            </Col>
                            <Col className="d-flex text-secondary mb-2 mt-1 align-self-center justify-content-end">
                            <Link to={`/MyRaiseFund`} className="text-light fw-bold w-75 py-0 rounded-3">
                                <Button variant="danger">Donate</Button>
                            </Link>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col >   
            <Col md={4} sm={6} xs={12} id="donate" className="mt-5 ">
                <Card className="shadow bg-white">
                    <Card.Img src="/image/Pcard1.png" variant="top" alt="images" className="w-100" style={{ height: "15rem"}} />
                    < Card.Body className="py-1 px-4" >
                        {/* <Col className="mt-1 text-secondary" style={{ width: "auto" }}>
                        Author : {"  "}
                        <label>{items?.user?.fullname}</label>
                        </Col> */}
                        <Col className="mb-1 mt-3 py-0 fs-5 fw-bold">
                            The Strength of a People. Power of Community
                        </Col>
                        <Col className="my-3 py-0 text-muted">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Col>
                        <ProgressBar variant="danger" max={100} now={20} className="my-3" />
                        <Row className="d-flex mb-2">
                            <Col className="text-dark fw-bold text-start align-self-center" style={{fontSize:"15px"}}>
                                Rp.200.000
                            </Col>
                            <Col className="d-flex text-secondary mb-2 mt-1 align-self-center justify-content-end">
                            <Link to={`/MyRaiseFund`} className="text-light fw-bold w-75 py-0 rounded-3">
                                <Button variant="danger">Donate</Button>
                            </Link>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col >   
            <Col md={4} sm={6} xs={12} id="donate" className="mt-5 ">
                <Card className="shadow bg-white">
                    <Card.Img src="/image/Pcard1.png" variant="top" alt="images" className="w-100" style={{ height: "15rem"}} />
                    < Card.Body className="py-1 px-4" >
                        {/* <Col className="mt-1 text-secondary" style={{ width: "auto" }}>
                        Author : {"  "}
                        <label>{items?.user?.fullname}</label>
                        </Col> */}
                        <Col className="mb-1 mt-3 py-0 fs-5 fw-bold">
                            The Strength of a People. Power of Community
                        </Col>
                        <Col className="my-3 py-0 text-muted">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Col>
                        <ProgressBar variant="danger" max={100} now={20} className="my-3" />
                        <Row className="d-flex mb-2">
                            <Col className="text-dark fw-bold text-start align-self-center" style={{fontSize:"15px"}}>
                                Rp.200.000
                            </Col>
                            <Col className="d-flex text-secondary mb-2 mt-1 align-self-center justify-content-end">
                            <Link to={`/MyRaiseFund`} className="text-light fw-bold w-75 py-0 rounded-3">
                                <Button variant="danger">Donate</Button>
                            </Link>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col >   
            <Col md={4} sm={6} xs={12} id="donate" className="mt-5 ">
                <Card className="shadow bg-white">
                    <Card.Img src="/image/Pcard1.png" variant="top" alt="images" className="w-100" style={{ height: "15rem"}} />
                    < Card.Body className="py-1 px-4" >
                        {/* <Col className="mt-1 text-secondary" style={{ width: "auto" }}>
                        Author : {"  "}
                        <label>{items?.user?.fullname}</label>
                        </Col> */}
                        <Col className="mb-1 mt-3 py-0 fs-5 fw-bold">
                            The Strength of a People. Power of Community
                        </Col>
                        <Col className="my-3 py-0 text-muted">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Col>
                        <ProgressBar variant="danger" max={100} now={20} className="my-3" />
                        <Row className="d-flex mb-2">
                            <Col className="text-dark fw-bold text-start align-self-center" style={{fontSize:"15px"}}>
                                Rp.200.000
                            </Col>
                            <Col className="d-flex text-secondary mb-2 mt-1 align-self-center justify-content-end">
                            <Link to={`/MyRaiseFund`} className="text-light fw-bold w-75 py-0 rounded-3">
                                <Button variant="danger">Donate</Button>
                            </Link>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col >   
        </Row >
    </Container>
  );
}

export default Cards;