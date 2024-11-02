import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import PurchaseHistory from "./PurchaseHistory";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import "./App.css";
import { useSelector } from "react-redux";
import { FaCarrot, FaDrumstickBite, FaHistory, FaHome, FaInfoCircle, FaPhone, FaShoppingCart } from "react-icons/fa";
import GoogleLoginComponent from "./GoogleLoginComponent";
import { GoogleOAuthProvider } from "@react-oauth/google";
import FacebookLoginComponent from "./FaceBookLoginComponent";


function App() {
  const cart = useSelector((state) => state.cart); 
const totalItems = cart.reduce ((sum,item)=> sum + item.quantity,0);
  return (
    <>
    <GoogleOAuthProvider clientId="952691513091-bkvrcq4gfut4crf7h2k27qpjrjhsbvjt.apps.googleusercontent.com">
<GoogleLoginComponent/>
</GoogleOAuthProvider>
<FacebookLoginComponent/>
     <BrowserRouter>
     <nav>
          <Link to="/home">  Home  <FaHome /> </Link>
          <Link to="/veg">Veg <FaCarrot/></Link>
          <Link to="/nonveg">      NonVeg    <FaDrumstickBite/></Link>
          <Link to="/cart">       Cart{totalItems} <FaShoppingCart/></Link>
          <Link to="/purchaseHistory">     PurchaseHistory <FaHistory/> </Link>
          <Link to="/contactUs">           ContactUs <FaPhone/></Link>
          <Link to="/aboutUs">AboutUs <FaInfoCircle/></Link>
          </nav>
      
    
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<NonVeg />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/purchaseHistory" element={<PurchaseHistory />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    
     
    </>
  );
}

export default App;
