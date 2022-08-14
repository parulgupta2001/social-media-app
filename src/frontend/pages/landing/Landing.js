import { Link } from "react-router-dom";
import "./landing.css";

export function Landing() {
  return (
    <div className="landing_container">
      <div className="logo landing_page_logo">ᖇᗴᑌᑎᎥ丅ᗴ</div>;
      <div className="landing_page_content">
        <div className="landing_page_content_header">IMAGINE A PLACE...</div>
        <div className="landing_page_content_paragraphs">
          <div>
            ...where you can belong to groups, or a worldwide community. Where
            just you and your handful of friends can spend time together. A
            place that makes it easy to talk everyday and hang out more ofton.
          </div>
        </div>
        <div className="landing_page_link">
          <Link to="/signup">
            <button className="landing_page_btn">Get started</button>
          </Link>
          <Link to="/login">
            <button className="landing_page_btn landing_page_login_btn">
              Login
            </button>
          </Link>
        </div>
      </div>
      <div className="landing_page_img_container">
        <img
          src="http://res.cloudinary.com/dwhran9qg/image/upload/Image/Online_world-cuate_dnc48h.svg"
          className="landing_page_img img_one"
          alt="social media connected pic"
        />
        <img
          src="http://res.cloudinary.com/dwhran9qg/image/upload/Image/Connected_world-amico_wj70lr.svg"
          className="landing_page_img img_two"
          alt="social media connected pic"
        />
      </div>
    </div>
  );
}
