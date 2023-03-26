import { Container, Card, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import { Link } from "react-router-dom"
import { useQuery } from 'react-query';
import { API } from '../config/api'

function Cards() {
    // Fetching fundings data from database
let { data: fundings } = useQuery('fundingsCache', async () => {
    const response = await API.get('/fundings');
    return response.data.data;
  });

  let asceding = []
  if (fundings !== undefined) {
    asceding = [...fundings]
    asceding.sort((a,b) => b.id - a.id)
  }

  return (
    <Container fluid>
        {asceding?.map((item) => {
            return(

                <Row key={item.id} className="justify-content-center" style={{margin:"0 10px"}}>
            <Col md={4} sm={6} xs={12} id="donate" className="mt-5 ">
                <Card className="shadow bg-white">
                    <Card.Img src={"http://localhost:5000/uploads/" + item.thumbnail} variant="top" alt="images" className="w-100" style={{ height: "15rem"}} />
                    < Card.Body className="py-1 px-4" >
                        <Col className="mb-1 mt-3 py-0 fs-5 fw-bold">
                            {item.title}
                        </Col>
                        <Col className="my-3 py-0 text-muted">
                            {item.description}
                        </Col>
                        <ProgressBar variant="danger" max={100} now={20} className="my-3" />
                        <Row className="d-flex mb-2">
                            <Col className="text-dark fw-bold text-start align-self-center" style={{fontSize:"15px"}}>
                                {item.goals}
                            </Col>
                            <Col className="d-flex text-secondary mb-2 mt-1 align-self-center justify-content-end">
                            <Link to={`/DetailDonateAdmin/${item.id}`} className="text-light fw-bold w-75 py-0 rounded-3">
                                <Button variant="danger">View Fund</Button>
                            </Link>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col >   
           
        </Row >
    );
})}
    </Container>
  );
}

export default Cards;