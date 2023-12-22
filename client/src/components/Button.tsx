
const Button = (props: any) => {
  const { onClickHandler, title, value } = props;

  return (
    <button onClick={(event) => onClickHandler(event.currentTarget.value)} value={value} className='btns'>{title}</button>
  )
}

export default Button