import './Button.css'

const Button = ({title, label}) => {
  return (
    <button className='btn' title={title}>{label}</button>
  )
}

export default Button
