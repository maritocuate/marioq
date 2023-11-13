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
  return (
    <div className="hidden" ref={buttonsRef}>
      <div className="flex-col">
        {projects.map((project, index) => (
          <Button
            key={index}
            selected={/* selectedButtonIndex ===  index*/ true}
            text={project.text}
            onClick={() => window.open(project.url)}
          />
        ))}
      </div>
    </div>
  )
}

export default ButtonsBar
