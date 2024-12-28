import './services.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const projectsDate = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio Item 1',
    github: 'https://github.com/project1',
    demo: 'https://demo1.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Portfolio Item 2',
    github: 'https://github.com/project2',
    demo: 'https://demo2.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Portfolio Item 3',
    github: 'https://github.com/project3',
    demo: 'https://demo3.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Portfolio Item 4',
    github: 'https://github.com/project4',
    demo: 'https://demo4.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Portfolio Item 5',
    github: 'https://github.com/project5',
    demo: 'https://demo5.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Portfolio Item 6',
    github: 'https://github.com/project6',
    demo: 'https://demo6.com'
  },
]

export default function Services() {
  return (
    <section className='projects'>
      <div className="top-section">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      </div>
      <div className="container projects-container">
        {projectsDate.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portfolio-item'>
              <div className="portfolio-item-img">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio-items-btns">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
