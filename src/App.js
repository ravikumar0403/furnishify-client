import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Footer, RequireAuth } from "./components";
import {
  Homepage,
  Login,
  ProductListing,
  ProductDetails,
  Signup,
  Cart,
  WishList,
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

        <Route path="/" element={<RequireAuth />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
        </Route>
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
