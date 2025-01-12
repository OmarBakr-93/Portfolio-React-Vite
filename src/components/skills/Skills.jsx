import './skills.css'
import CSS from '../../assets/css3.svg'
import Tailwind from '../../assets/tailwindcss.svg'
import JS from '../../assets/javascript.svg'
import Express from '../../assets/expressjs.svg'
import NODE from '../../assets/nodejs.svg'
import ReactJS from '../../assets/react.svg'
import Mongo from '../../assets/mongodb.svg'
import Django from '../../assets/django.svg'



const skillsData = [
  {
    id: 1,
    image: CSS,
    title: 'CSS',
    disc: 'User Interface',
  },
  {
    id: 2,
    image: Tailwind,
    title: 'Tailwind',
    disc: 'User Interface',
  },
  {
    id: 3,
    image: JS,
    title: 'JavaScript',
    disc: 'User Interface',
  },
  {
    id: 4,
    image: Express,
    title: 'Express',
    disc: 'User Interface',
  },
  {
    id: 5,
    image: NODE,
    title: 'Node',
    disc: 'User Interface',
  },
  {
    id: 6,
    image: ReactJS,
    title: 'React',
    disc: 'User Interface',
  },
  {
    id: 7,
    image: Mongo,
    title: 'MongoDB',
    disc: 'User Interface',
  },
  {
    id: 8,
    image: Django,
    title: 'Django',
    disc: 'User Interface',
  },
]

export default function Skills() {
  return (
    <section className='skills' id='skills'>
      <div className="top-section">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </div>
      <div className="container container-skills">
        {skillsData.map(({ id, image, title, disc }) => {
          return (
            <article key={id} className='card-skill'>
              <div className="icon">
                <img src={image} alt="" />
              </div>
              <div className="content">
                <h4>{title}</h4>
                <p className='text-light'>{disc}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
