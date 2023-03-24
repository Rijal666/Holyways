import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import DetailDonate from "./pages/DetailDonate"
import MyProfile from "./pages/MyProfile";
import MyRaiseFund from "./pages/MyRaiseFund";
import MakeRaiseFund from "./pages/MakeRaiseFund";
import './App.css';


function App() {
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-donate" element={<DetailDonate />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/MyRaiseFund" element={<MyRaiseFund />} />
        <Route path="/MakeRaiseFund" element={<MakeRaiseFund />} />
      </Routes>
    </div>
  );
}

export default App;