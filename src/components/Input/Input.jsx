import PropTypes from 'prop-types'

const Input = ({ name, label, value, setValue }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input name={name} type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
}

export default Input
