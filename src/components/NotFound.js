import { Link } from "react-router-dom"

function NotFound(){

  return (
    <>
      <p>Page not found </p>
      <Link to="/">Go Home</Link>
    </>
  );
};


export default NotFound;