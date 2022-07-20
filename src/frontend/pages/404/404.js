import "./404.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function PageNotFound() {
  const { user, token } = useSelector((store) => store.auth);

  return (
    <>
      <img
        src="http://res.cloudinary.com/dwhran9qg/image/upload/Image/Oops_404_Error_with_a_broken_robot-amico_cwha98.svg"
        className="page_not_found_img"
        alt="404 error pic"
      />

      {token ? (
        <Link to="/page/Home">
          <div className="go_to_home">GO to Home</div>
        </Link>
      ) : (
        <Link to="/">
          <div className="go_to_home">GO to Home</div>
        </Link>
      )}
    </>
  );
}
