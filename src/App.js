import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Wishlist from "./components/Wishlist";
import Mybag from "./components/Mybag";
import Userdetails from "./components/Userdetails";
import Home from "./components/Home";
import OneOfKindJewellery from "./components/OneOfKindJewellery";
import LimitedEdition from "./components/LimitedEdition";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Search from "./components/Search";
import Globalloginpage from "./components/Globalloginpage";
import { useState } from "react";
import Adminportal from "./components/AdminScreen/Adminportal";
import LoaderState from "./context/loaderState";

function App() {
  const [showComponents, setShowComponents] = useState(true);

  const handleButtonClick = () => {
    setShowComponents(true);
  };

  return (
    <div>
      {showComponents ? (
        <LoaderState>
        <Router>
          <Header />
          {/* <Navbar /> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/mybag" element={<Mybag />} />
            <Route path="/userdetails" element={<Userdetails />} />
            <Route path="/limitededition" element={<LimitedEdition />} />
            <Route path="/oneofkind" element={<OneOfKindJewellery />} />
            <Route path="/search" element={<Search />} />
            <Route path="/login" element={<Globalloginpage />} />
            <Route path="/adminportal" element={<Adminportal />} />
            <Route path="/adminshubhamlutade" element={<Globalloginpage />} />
          </Routes>

          <Footer />
        </Router>
        </LoaderState>
      ) : (
        <Router>
          <Routes></Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
