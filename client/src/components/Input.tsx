const Input = (props: any) => {
  const { handleChange, value, name, title, color } = props;

  return (
    <label className="price-label-container">
      <input 
      onChange={handleChange} 
      type="radio" 
      value={value} 
      name={name} 
      className='radio'
      />
      <span 
        className="checkmark" 
        style={
        color === "white" 
        ? {backgroundColor: "", border: "1px solid black"}
        : color === "all"
        ? { backgroundImage: "linear-gradient(#e66465, #9198e5)", border: "1px solid transparent" }
        : { backgroundColor: color, border: "1px solid transparent" }
      }>
      </span> {title}
  </label>
  )
}

export default Input;