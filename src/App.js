import "./App.css";
import { Routes, Route} from "react-router-dom";
import NavbarLayout from "./Components/Navbar";

import Footer from "./Components/Footer";
import HomePage from "./Layout/HomePage";
import CartPage from "./Layout/CartPage";
import DetailPage from "./Layout/DetailsPage";
import LoginPage from "./Layout/LoginPage";
import RegisterPage from "./Layout/RegisterPage";
import FlowerBouqet from "./Layout/CategoryPage/Flower-Bouqet";
import MoneyBouqet from "./Layout/CategoryPage/Money-Bouqet";
import SnackBouqet from "./Layout/CategoryPage/Snack-Bouqet";
import SpecialBouqet from "./Layout/CategoryPage/Special-Bouqet";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/flower-bouqet" element={<FlowerBouqet />} />
        <Route path="/money-bouqet" element={<MoneyBouqet />} />
        <Route path="/snack-bouqet" element={<SnackBouqet />} />
        <Route path="/special-bouqet" element={<SpecialBouqet />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App