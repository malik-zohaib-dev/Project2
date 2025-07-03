import "./Button.css"

const Button = ({isOutline, text, icon}) => {
//const {isOutline, text, icon} = props

  return (
     <button className={`primary_btn ${isOutline ? 'outline_btn' : ''}`}> 
    {icon}
    {text}
    </button>
  )
}

export default Button