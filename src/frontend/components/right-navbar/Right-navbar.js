import "./right-navbar.css";

export function RightNav() {
  return (
    <div className="right_nav_container">
      <input placeholder="Search" className="right_nav_input" />
      <div className="who_to_follow">
        <div className="who_to_follow_header">Who to follow</div>
        <div className="who_to_follow_content">
          <div className="follow_suggestions">
            <img src="http://res.cloudinary.com/dwhran9qg/image/upload/avatar/sundar_pichai_xikclb.jpg" />
            <div>
              <div className="follow_suggestion_name">S.Pichai</div>
              <div className="follow_suggestion_username">@sundar</div>
            </div>
            <button className="follow_btn">Follow</button>
          </div>

          <div className="follow_suggestions">
            <img src="http://res.cloudinary.com/dwhran9qg/image/upload/avatar/2_qgl2bi.jpg" />
            <div>
              <div className="follow_suggestion_name">Microsoft</div>
              <div className="follow_suggestion_username">@Microsoft</div>
            </div>
            <button className="follow_btn">Follow</button>
          </div>

          <div className="follow_suggestions">
            <img src="http://res.cloudinary.com/dwhran9qg/image/upload/avatar/3_ytjgwu.jpg" />
            <div>
              <div className="follow_suggestion_name">Bill Gates</div>
              <div className="follow_suggestion_username">@BillGates</div>
            </div>
            <button className="follow_btn">Follow</button>
          </div>

          <div className="follow_suggestions">
            <img src="http://res.cloudinary.com/dwhran9qg/image/upload/avatar/5_azirpx.jpg" />
            <div>
              <div className="follow_suggestion_name">Jeff Bezos</div>
              <div className="follow_suggestion_username">@JeffBezos</div>
            </div>
            <button className="follow_btn">Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
}
