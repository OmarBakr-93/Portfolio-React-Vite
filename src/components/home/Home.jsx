import './home.css'
import me from '../../assets/me.jpg'
import HomeSocial from './homeSocial'



export default function Home() {
  return (
    <div className="home"> 
        <div className="container home-container">
            <h4>Hello I'm</h4>
            <h1>Omar Bakr</h1>
            <h4 className='text-light'>Full-Stack Developer</h4>
            <div className="btns">
                <a href='#' className='btn' download={true}>Download CV</a>
                <a href='#' className='btn btn-primary'>Let's Talk</a>
            </div>
            <div className="me">
                <img src={me} alt="" />
            </div>
            <a href="#about" className='scroll-down'>Scroll Down</a>
            <HomeSocial />
        </div>
    </div>
  )
}
