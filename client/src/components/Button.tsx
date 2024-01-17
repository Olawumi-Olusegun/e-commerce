import React from "react";
import { Link } from "react-router-dom";
import { ButtonProps } from "../types";


const Button: React.FC<ButtonProps> = (props) => {

  return (
    <>
    {
      props.renderAs === "anchor"
      ? <a {...props}>{props.children}</a>
      : props.renderAs === "link"
      ? <Link {...props}>{props.children}</Link>
      : <button className='btns' {...props}>{props.children}</button>
    }
    </>
  )
}

export default Button