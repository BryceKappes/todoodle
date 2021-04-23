import { Link } from "react-router-dom";
import example from "../assets/images/example.jpg";

function NotFound() {
  return (
    <>
      <img src={example} alt="dog" id="pnf"></img>
      <p>Page not found </p>
      <Link to="/">Go Home</Link>
    </>
  );
}

export default NotFound;