import "./home.css";
import { LeftNav, MainContent, RightNav } from "../../components/index";

export function Home() {
  return (
    <>
      <div className="home_container">
        <LeftNav className="left_nav" />
        <MainContent className="main_content" />
        <RightNav className="right_nav" />
      </div>
    </>
  );
}
