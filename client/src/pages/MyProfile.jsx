import Header from "../components/Header";
import HistoryDonate from "../components/HistoryDonate";
import Profile from "../components/Profile";

function MyProfile() {
  return (
    <div>
      <Header />
      <div style={{ marginTop: 77 }}>
        <div className="d-flex justify-content-between" style={{ padding: "0 0px" }}>
          <Profile />
          <HistoryDonate />
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
