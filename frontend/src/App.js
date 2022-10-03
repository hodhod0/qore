import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.min.css";

import "./App.css";
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import SideBar from "./components/sidebar/SideBar";
import Orders from "./pages/order/Orders";
import Dashboard from "./pages/dashboard/Dashboard";
function App() {
  document.body.addEventListener("click", function (e) {
    e = e || window.event;
    var target = e.target;
    console.log(target.id === "menu-button"|| target.id==='sidebar');
  });
  return (
    <div className="">
      <Navbar />
      <div className="  " style={{ display: "flex" }}>
        <BrowserRouter>
          <div className="hod">
            <SideBar />
          </div>
          <div className="pages">
            <Routes>
              <Route index path="/order" element={<Orders />} />
              <Route index path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
