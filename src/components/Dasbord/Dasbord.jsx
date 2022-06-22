import React, { useState } from "react";
import "./Dasbord.css";
import dasbordManImg from "../../Image/Dasbord/dasbord-man.png";
import { NavLink } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { FcSelfServiceKiosk } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { MdCastForEducation } from "react-icons/md";
import { AiFillExperiment } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";

const Dasbord = () => {
  const [open, setOpen] = useState(false);
  const navToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="dasbord-body ">
      <div className="dashbord-header pc-display-none">
        <button className="btn-primary pc-display-none" onClick={navToggle}>
          {!open ? (
            <VscThreeBars className=" text-4xl text-white" />
          ) : (
            <AiOutlineClose className=" text-4xl text-white" />
          )}
        </button>
        <div className="mobile-view-icon pc-display-none">
          <h2>
            Joy<span>App</span>
          </h2>
        </div>
      </div>
      <div
        className={`pc-dashbord  ${open ? "dashbord-main" : "dashbord-none"}`}
      >
        <img
          className="dashbord-img pc-display-none"
          src={dasbordManImg}
          alt="dasbordmanimage"
        />
        <h2 className=" font-bold text-2xl text-left text-indigo-700 uppercase pc-display-none">
          <span className=" text-green-700 text-3xl">J</span>oysen{" "}
          <span className=" text-green-700 text-3xl">R</span>oy{" "}
        </h2>
        <p className=" text-teal-500 pc-display-none">Mern Stake devoloper</p>

        <nav className="navbar">
          <div className="nav-logo mobile-disply-none">
            <h2>
              Joy<span>App</span>
            </h2>
          </div>
          <ul className="nav-ul">
            <li>
              <NavLink to="/home" className="btn-gray">
                <AiTwotoneHome className="icon" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="btn-gray">
                {" "}
                <FcAbout className="icon" />
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="btn-gray">
                {" "}
                <FcSelfServiceKiosk className="icon" />
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" className="btn-gray">
                {" "}
                <GiSkills className="icon" />
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink className="btn-gray" to="/education">
                {" "}
                <MdCastForEducation className="icon" />
                Education
              </NavLink>
            </li>
            <li>
              <NavLink className="btn-gray" to="/experience">
                {" "}
                <AiFillExperiment className=" icon" />
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink className={`btn-gray`} to="/contact">
                {" "}
                <BiPhoneCall className="icon " /> Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Dasbord;
