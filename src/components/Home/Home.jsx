import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import "./Home.css";
import shape from "../../Image/home/web shap smoll2.png";
import joy from "../../Image/home/joy.png";
const Home = () => {
  return (
    <div className="home-body">
      <div className="home-main">
        <div className="home-left-side">
          <div className="home-left-title">
            <h2 className="name-title-all">Hello, my name is</h2>
            <h1 className="name-title">
              {" "}
              JOYSEN <span>ROY</span>
            </h1>
            <div className="text-animation-body">
              <p className="animetion-text name-title-all">
                {" "}
                And I'm a<span> </span>
              </p>
              <TypeWriterEffect
                textStyle={{
                  fontFamily: "Red Hat Display",
                  color: "#113D95",
                  fontWeight: 600,
                  fontSize: "1.5em",
                }}
                cursorColor="#3F3D56"
                multiText={[
                  "Mern Stack Developer...  ",
                  "Mern Stack Developer...  ",
                ]}
                typeSpeed={30}
                startDelay={100}
                multiTextLoop
              />
            </div>
          </div>
        </div>
        <div className="home-right-side">
          <div className="img-shape">
            <img className="shape-image" src={shape} alt="shape" />
            <img className="my-image" src={joy} alt="meImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
