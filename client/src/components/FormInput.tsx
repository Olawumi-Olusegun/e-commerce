import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const FormInput = React.forwardRef<HTMLInputElement, InputProps>(({...props}, ref) => {
  return (
    <>
        <input {...props} ref={ref} />
    </>
  )
})

export default FormInput