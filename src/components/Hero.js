import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <header className="hero">
      <div className="text-center">
        <h2 className="text-primary">Furniture that makes home</h2>
        <p className="text-light fs-2">Your home is a reflection of you.</p>
        <p className="text-light fs-2">
          Nail your aesthetic with products our stylists love and recommend.
        </p>
        <Link to="/products" className="btn primary">
          SHOP NOW
        </Link>
      </div>
    </header>
  );
};
