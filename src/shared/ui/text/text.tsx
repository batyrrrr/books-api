
interface TextProps {
  text: string | undefined
  classnName: string
}

export const Text = ({ text, classnName }: TextProps) => {
  return (
    <h1
      className={`${classnName}`}
    >{text}
    </h1>
  )
}
