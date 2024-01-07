import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const FormInput = React.forwardRef<HTMLInputElement, InputProps>(({...props}, ref) => {
  return (
    <div>
        <input {...props} ref={ref}  />
    </div>
  )
})

export default FormInput