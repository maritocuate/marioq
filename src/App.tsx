import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

import './App.css'

function App() {
  const typedText = useRef(null)
  const buttons = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedText.current, {
      strings: [
        'Hi, my name is Mario! <br />' +
          'Lately I working with React JS for over two years now using design patterns (HOC, Presentational, Provider, Compound, etc). <br />' +
          'I prefer Jest for unit testing, and I also use Cypress for end-to-end testing. <br />' +
          'For some projects where I need to work server-side I use NextJS with Prisma for the NoSQL databases (MongoDB). <br /> ^1000' +
          'Through the years I acquired strong understanding of vanilla JavaScript and general knowledge in popular libraries like jQuery, GSAP, TailwindCSS, etc. <br /> ^1000' +
          '<br/>Latest projects: <br/>' +
          '-> linkedin <br/>' +
          '-> github <br/>' +
          '-> last-work <br/>',
      ],
      startDelay: 1000,
      typeSpeed: 1,
      showCursor: false,
      onComplete: () => {
        buttons.current.style.display = 'block'
      },
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div className="container">
      <div className="text" ref={typedText}></div>
      <div className="buttons" ref={buttons}>
        <a href="https://www.linkedin.com/in/marioq/" target="_blank">
          Linkedin
        </a>
      </div>
    </div>
  )
}

export default App
