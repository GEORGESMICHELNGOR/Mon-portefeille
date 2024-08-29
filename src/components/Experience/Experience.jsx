import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>8</div>
        <span  style={{color: darkMode?'white':''}}>mois </span>
        <span>Expérience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>8+</div>
        <span  style={{color: darkMode?'white':''}}>complètes </span>
        <span>Projets</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>0+</div>
        <span  style={{color: darkMode?'white':''}}>Entreprises </span>
        <span>Travail</span>
      </div>
    </div>
  );
};

export default Experience;
