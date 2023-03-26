import { Container, Row, Col, Stack, ProgressBar, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { API } from '../config/api';
import ModalDonate from './ModalDonate';
import ListDonation from './ListDonation';


const Donate = (props) => {
    const [showDonate, setShowDonate] = useState(false);
    let {id} = useParams();


    const handleClose = () => {
        setShowDonate(false);
    }

    const handleDonate = () => {
        handleClose(true);
        setShowDonate(true);
    }

    let { data: funding } = useQuery('donateCache', async () => {
        // console.log(fundings);
        const response = await API.get(`/funding/${id}`);
        return response.data.data;
    });


  return (
    <>
    <Container fluid>
      <Row style={{ margin:"0px 100px"}}>
        <Col style={{display:"flex", flex:"wrap", marginTop:"50px"}}>
        <Col >
            <img src={"http://localhost:5000/uploads/" + funding?.thumbnail} alt={funding?.title} style={{ width: "450px", height:"400px", top:"164px", marginLeft:"-12px" }} />
        </Col>
        <Col>
            <Col xs="4" className="mb-5" style={{width:"100%"}}>
                <Col style={{fontSize:"36px", fontWeight:"bold"}}>
                    {funding?.title}
                </Col>
                <Stack direction="horizontal" className="py-3">
                    <Col className="text-danger text-start" style={{fontSize:"25px", fontWeight:"bold"}}>
                        Rp.200.000
                    </Col>
                    <Col className="text-center" style={{fontSize:"18px", color:"#616161"}}>Gathered from </Col>
                    <Col className="text-secondary text-end" style={{fontSize:"25px", fontWeight:"bold"}}>
                       Rp.{funding?.goals}
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
                    {funding?.description}
                </Col>
                <Col className="text-secondary mt-1">
                    <Button variant="danger" className="text-light fw-bold w-100" onClick={handleDonate} >Donate</Button>
                </Col>
            </Col >
        </Col>
        </Col>
       <ListDonation/>
      </Row>
    </Container>

    <ModalDonate show={showDonate} onHide={handleClose} />
    </>
  );
}

export default Donate;