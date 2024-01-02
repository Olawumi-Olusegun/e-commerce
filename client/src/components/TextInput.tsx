import React from 'react';
import { Controller, RegisterOptions } from 'react-hook-form';


interface TextInputProps {
    control: any;
    name: string;
    label?: string;
    rules: RegisterOptions;
    errors: any;
    [rest: string]: any;
}

const TextInput: React.FC<TextInputProps> = ({ control, name, label, rules, errors, ...rest }) => {
 
  return (
    <>
    { label && <label className="form-label" htmlFor={name}>{label}</label> }
    <Controller
    control={control}
    rules={rules}
    name={name}
     render={({field}) => {
        return <> <input {...field} {...rest} />
            {errors[name] && <p className="error-message">{errors[name].message}</p>  }
        </>
     }}
    />
  </>
  )
}

export default TextInput