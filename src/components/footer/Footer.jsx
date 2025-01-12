import './footer.css'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer>
      <a href="#" className='footer-logo'>Omar Bakr</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer-socials">
        <a href="https://www.facebook.com/omar.bakr.1" target="_blank"><FaFacebook /></a>
        <a href="https://www.linkedin.com/in/omar-bakr-1/" target="_blank"><FaLinkedin /></a>
        <a href="https://twitter.com/OmarBakr1" target="_blank"><FaTwitter /></a>
      </div>

      <div className="footer-copyright">
        <small>&copy; <a href="#">Omar Bakr .</a> All rights reserved.</small>
      </div>
    </footer>
  )
}
