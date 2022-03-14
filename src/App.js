import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import {
  Homepage,
  Login,
  ProductListing,
  ProductDetails,
  Signup,
} from "./pages";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
