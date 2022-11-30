import "./App.css";
import Registration from "./components/screens/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OtpWindow from "./components/screens/OtpWindow";

function App() {
  return (
    <>
    <Router>
      <Registration />
      <Routes>
      <Route path="/" element={<Registration />} />

        <Route path="/verfiy" element={<OtpWindow />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
