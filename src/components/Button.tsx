interface ButtonProps {
  selected: boolean
  text: string
  onClick: () => void
}

const Button = ({ text, selected, onClick }: ButtonProps) => {
  return (
    <div className="cursor-pointer px-6" onClick={onClick}>
      <span className="inline left-9 absolute">{selected ? '>' : '  '}</span>
      {text}
    </div>
  )
}

export default Button
