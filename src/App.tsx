import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

import './App.css'
import ButtonsBar from './components/ButtonsBar'

const projects = [
  {
    text: 'Salvemos Patitas (NextJS)',
    url: 'https://salvemospatitas.vercel.app/',
  },
  {
    text: 'Cripto Currencies (ReactJS)',
    url: 'https://hardcore-jones-d2ffc9.netlify.app/',
  },
  {
    text: 'MBank (NextJS)',
    url: 'https://mbank-three.vercel.app/',
  },
  {
    text: 'Airbnb Clone (NextJS)',
    url: 'https://eclectic-churros-0472f9.netlify.app/',
  },
  {
    text: 'Simpsons Screensaver (ReactJS)',
    url: 'https://simpsons-screensaver.vercel.app',
  },
  {
    text: '3D Portfolio (ReactJS)',
    url: 'https://3d-portfolio-beta-five.vercel.app/',
  },
  {
    text: 'Messenger Clone (NextJS)',
    url: 'https://messenger-rho-taupe.vercel.app/',
  },
]

function App() {
  const typedText = useRef(null)
  const buttons = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedText.current, {
      strings: [
        'Hi, my name is Mario! <br />' +
          'Lately I working with React JS for over two years now using design patterns (HOC, Presentational, Provider, Compound, etc). <br />' +
          'I prefer Jest for unit testing, and I also use Cypress for end-to-end testing. <br />' +
          'For some projects where I need to work server-side I use NextJS with Prisma for the NoSQL databases (MongoDB). <br /> ^100' +
          'Through the years I acquired strong understanding of vanilla JavaScript and general knowledge in popular libraries like jQuery, GSAP, TailwindCSS, etc. <br /> ^100' +
          '<a class="link" href="https://www.linkedin.com/in/mario-quiroga-73299527/" target="_blank">LinkedIn</a><br/>' +
          '<br/><span class="comment">?</span> Select a project: <span class="comment">> - Use arrow-keys. Return to submit.</span><br/>',
      ],
      startDelay: 100,
      typeSpeed: 0,
      backSpeed: 0,
      showCursor: false,
      onComplete: () => {
        if (buttons.current)
          (buttons.current as HTMLDivElement).style.display = 'block'
      },
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div className="container">
      <div className="text" ref={typedText}></div>
      <ButtonsBar buttonsRef={buttons} projects={projects} />
    </div>
  )
}

export default App
