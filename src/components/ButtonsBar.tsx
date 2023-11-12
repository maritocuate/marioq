interface ButtonsBarProps {
  buttonsRef: React.RefObject<HTMLDivElement>
}

const ButtonsBar = ({ buttonsRef }: ButtonsBarProps) => {
  return (
    <div className="hidden" ref={buttonsRef}>
      <div className="flex-col">
        <a href="https://www.linkedin.com/in/marioq/" target="_blank">
          Project 1
        </a>
        <a href="https://github.com/marioq" target="_blank">
          Project 2
        </a>
        <a href="https://twitter.com/marioq" target="_blank">
          Project 3
        </a>
      </div>
    </div>
  )
}

export default ButtonsBar
