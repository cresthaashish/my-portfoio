import "./styles.css";
import "./css/bootstrap.min.css";
import About from "./components/About";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Services from "./components/Services";
import { useState, useEffect } from "react";
import bgImg from "./images/cover.jpg";
export default function App() {
  const [isActive, setIsActive] = useState("#header");
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 130) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
      }
    });
  }, [isActive]);
  return (
    <div className="whole_wrap">
      <div
        className="bg_img"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
      <Header
        isActive={isActive}
        setIsActive={setIsActive}
        isScroll={isScroll}
      />
      <About isActive={isActive} setIsActive={setIsActive} />
      <Resume isActive={isActive} setIsActive={setIsActive} />
      <Services isActive={isActive} setIsActive={setIsActive} />
      <Portfolio isActive={isActive} setIsActive={setIsActive} />
      <Contacts isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
}
