import React from 'react';
import { Controller,  FieldErrors,  RegisterOptions, } from 'react-hook-form';
import { SignInType } from '../pages/auth/SignIn/SignIn';


interface TextInputProps extends  React.InputHTMLAttributes<HTMLInputElement> {
    control: any;
    name: string;
    label?: string;
    rules: RegisterOptions;
    errors: any;
    // errors: FieldErrors<SignInType>
    // [key: string]: any;
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(({ control, name, label, rules, errors, ...restProps }, ref) => {

  return (
    <>
    { label && <label className="form-label" htmlFor={name}>{label}</label> }
    <Controller
    control={control}
    rules={rules}
    name={name}
     render={({field}) => {
        return <> <input {...field} ref={ref} {...restProps} />
            {errors[name] && <p className="error-message">{errors[name].message}</p>}
        </>
     }}
    />
  </>
  )
});

export default TextInput