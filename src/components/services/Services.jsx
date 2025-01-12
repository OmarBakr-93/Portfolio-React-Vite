import './services.css'
import { MdDesignServices } from 'react-icons/md'
import { FaCode } from 'react-icons/fa'
import { IoIosRocket } from 'react-icons/io'

export default function Services() {
  return (
    <section className='services' id='services'>
      <div className="top-section">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>
      <div className="container services-container">
        <article className='card'>
          <MdDesignServices  className="icon" />
          <h3>Web Design</h3>
          <p className='text-light'>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </article>
        <article className='card'>
          <IoIosRocket className="icon" />
          <h3>Fast Performance</h3>
          <p className='text-light'>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </article>
        <article className='card'>
          <FaCode className="icon" />
          <h3>Clean Code</h3>
          <p className='text-light'>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </article>
      </div>
    </section>
  )
}
