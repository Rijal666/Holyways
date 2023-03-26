import { Container, Row, Col, Stack, ProgressBar } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { API } from '../config/api';
import ListApprove from './ListApprove';
import ListDonation from './ListDonation';


const DonateAdmin = (props) => {
    let { id } = useParams();

    
    // const navigate = useNavigate();

    let { data: funding } = useQuery('donateCache', async () => {
        // console.log(fundings);
        const response = await API.get(`/funding/${id}`);
        return response.data.data;
      });

    //   const params = useParams();
    //   let Funding = fundings.filter((Funding) => Funding.id === parseInt(params.id));
    //   Funding = Funding[0];

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
                        {funding?.goals}
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
            </Col >
        </Col>
        </Col>
            <ListDonation/>
            <ListApprove/>

           
      </Row>
    </Container>
    </>
  );
}

export default DonateAdmin;