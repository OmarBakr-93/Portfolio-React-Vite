import './about.css'
import Image1 from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";


export default function About() {
  return (
    <section className="about" id="about">
      <div className="top-section">
        <h5>Get To Know Me</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={Image1} alt="" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <div className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </div>
            <div className="about-content">
            <div className="about-card">
              <FiUsers className="about-icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </div>
        </div>
        <div className="about-content">
            <div className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>100+ Completed</small>
            </div>
        </div>
          </div>
          <p>I'm Omar Bakr, a Full-Stack Developer with a passion for creating innovative and user-friendly web applications.</p>
          <a href='#contact' className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
