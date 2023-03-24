import {Container} from 'react-bootstrap';

function HistoryDonation() {
  return (
    <Container fluid>
        <div className="card-wrapper">
            <h3 className="fw-bold" style={{ marginBottom: 26 }}>
                History Donation
            </h3>
            <div className="d-flex align-items-center justify-content-between mb-2 " style={{ backgroundColor: "white", width: 524, height: 125, padding:"0px 20px" }}>
                <div className="ms-1 mt-2">
                    <p  style={{fontSize:"20px", fontWeight:"bold", marginTop:"-20px" }}>
                        bantu adit
                    </p>
                    <p className="m-0 mt-1" style={{ fontSize: 14 }}>
                        sekarang
                    </p>
                    <p className="m-0 mt-3" style={{ color: "#974A4A", fontSize: 14 }}>
                        200000000
                    </p>
                </div>
                <div className="font-size-14px text-center rounded mt-5" style={{ width: "100px", height:"30px",color: "#FF9900", backgroundColor: "rgba(255,153,0,0.125)" }}>
                    pending
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2 " style={{ backgroundColor: "white", width: 524, height: 125, padding:"0px 20px" }}>
                <div className="ms-1 mt-2">
                    <p  style={{fontSize:"20px", fontWeight:"bold", marginTop:"-20px" }}>
                        bantu adit
                    </p>
                    <p className="m-0 mt-1" style={{ fontSize: 14 }}>
                        sekarang
                    </p>
                    <p className="m-0 mt-3" style={{ color: "#974A4A", fontSize: 14 }}>
                        200000000
                    </p>
                </div>
                <div className="font-size-14px bg-danger text-center rounded mt-5" style={{ width: "100px", height:"30px",color: "white" }}>
                    failed
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2 " style={{ backgroundColor: "white", width: 524, height: 125, padding:"0px 20px" }}>
                <div className="ms-1 mt-2">
                    <p  style={{fontSize:"20px", fontWeight:"bold", marginTop:"-20px" }}>
                        bantu adit
                    </p>
                    <p className="m-0 mt-1" style={{ fontSize: 14 }}>
                        sekarang
                    </p>
                    <p className="m-0 mt-3" style={{ color: "#974A4A", fontSize: 14 }}>
                        200000000
                    </p>
                </div>
                <div className="font-size-14px bg-success text-center rounded mt-5" style={{ width: "100px", height:"30px",color: "white" }}>
                    success
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2 " style={{ backgroundColor: "white", width: 524, height: 125, padding:"0px 20px" }}>
                <div className="ms-1 mt-2">
                    <p  style={{fontSize:"20px", fontWeight:"bold", marginTop:"-20px" }}>
                        bantu adit
                    </p>
                    <p className="m-0 mt-1" style={{ fontSize: 14 }}>
                        sekarang
                    </p>
                    <p className="m-0 mt-3" style={{ color: "#974A4A", fontSize: 14 }}>
                        200000000
                    </p>
                </div>
                <div className="font-size-14px bg-success text-center rounded mt-5" style={{ width: "100px", height:"30px",color: "white" }}>
                    success
                </div>
            </div>
        </div>
    </Container>
  );
}

export default HistoryDonation;