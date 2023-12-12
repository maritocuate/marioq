import { KeyboardEventHandler, useCallback, useEffect, useState } from 'react'
import Button from './Button'

interface ButtonsBarProps {
  buttonsRef: React.RefObject<HTMLDivElement>
  projects: Project[]
}

interface Project {
  text: string
  url: string
}

const ButtonsBar = ({ buttonsRef, projects }: ButtonsBarProps) => {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0)

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = useCallback(
    e => {
      switch (e.key) {
        case 'Enter':
          window.open(projects[selectedButtonIndex].url)
          break
        case 'ArrowDown':
          selectedButtonIndex < projects.length - 1 &&
            setSelectedButtonIndex(prev => prev + 1)
          break
        case 'ArrowUp':
          selectedButtonIndex > 0 && setSelectedButtonIndex(prev => prev - 1)
      }
    },
    [selectedButtonIndex]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <div className="hidden" ref={buttonsRef}>
      <div className="flex-col" onKeyDown={handleKeyDown}>
        {projects.map((project, index) => (
          <Button
            key={index}
            selected={index === selectedButtonIndex}
            text={project.text}
            onClick={() => window.open(project.url)}
          />
        ))}
      </div>
    </div>
  )
}

export default ButtonsBar
