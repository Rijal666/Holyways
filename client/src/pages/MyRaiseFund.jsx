import {Container, Button} from 'react-bootstrap';
import Header from '../components/Header';
import Cards from '../components/CardAdmin';

function MyRaiseFund() {
  return (
    <>
    <Header/>
    <Container fluid>
        <div style={{margin:"50px 100px", display:"flex", justifyContent:"space-between"}}>
            <div>
            <p style={{ fontSize:"36px", fontWeight:"bold"}}>
                My Raise Fund
            </p>
            </div>
            <div>
            <Button href='/MakeRaiseFund' variant='danger' className='mt-3'>
                Make Raise Fund
            </Button>
            </div>
        </div>
        <div>
        <Cards/>
        </div>
    </Container>
    </>
  );
}

export default MyRaiseFund;