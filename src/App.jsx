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
import GitHubLoginButton from "./Login";

// Define App component
function App() {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <GoogleOAuthProvider clientId="952691513091-bkvrcq4gfut4crf7h2k27qpjrjhsbvjt.apps.googleusercontent.com">
        {/* Google Login Component */}
        <div className="login-container">
          <h3>Login With</h3>
          <GoogleLoginComponent />
          <FacebookLoginComponent /><GitHubLoginButton />
        </div>
      </GoogleOAuthProvider>

      {/* Rest of the app */}
      <BrowserRouter>
        <nav>
          <Link to="/home"> <FaHome /> Home</Link>
          <Link to="/veg"><FaCarrot /> Veg </Link>
          <Link to="/nonveg"><FaDrumstickBite /> NonVeg</Link>
          <Link to="/cart"><FaShoppingCart /> Cart{totalItems}</Link>
          <Link to="/purchaseHistory"><FaHistory /> PurchaseHistory</Link>
          <Link to="/aboutUs"><FaInfoCircle /> AboutUs</Link>
          <Link to="/contactUs"> <FaPhone /> ContactUs</Link>
  
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<NonVeg />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/purchaseHistory" element={<PurchaseHistory />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
