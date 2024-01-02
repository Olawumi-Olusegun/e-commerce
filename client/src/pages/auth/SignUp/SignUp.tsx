import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import {  SignUpSchema } from "../../../validations/authValidation";
import "./SignUp.css";
import TextInput from "../../../components/TextInput";



type SignUpType = z.infer<typeof SignUpSchema>;

export default function SignUp() {

  const { register, control, handleSubmit, reset, formState: { errors, isDirty, isValid, isSubmitting } } = useForm<SignUpType>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
    resolver: zodResolver(SignUpSchema),
    mode: "all"
  });

  const disabled = !isDirty || !isValid || isSubmitting;
  
const handleFormSubmit = async (SignupData: SignUpType) => {
        try {
          console.log({SignupData})
          
          reset();
        } catch (error) {
          
        }
}

  return (
    <div className="form-container">
      
      <div className="form-logo">
        <h4>E-commerce</h4>
      </div>

      <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
      
      
      <h2>Signup</h2>
      <p>Already registered? <Link to="/signin">Sign in.</Link> </p>
        
        <div className="form-row">
          <div className="full-width">

             <TextInput
             control={control}
             name="name"
             label="Name"
             rules={{ required: "Name is required" }}
             errors={errors}
             type="text"
             placeholder="Name..."
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="full-width">
            <TextInput
             control={control}
             name="email"
             label="Email"
             rules={{ required: "Email is required" }}
             errors={errors}
             type="text"
             placeholder="Email..."
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="full-width">
             <TextInput
             control={control}
             name="password"
             label="Password"
             rules={{ required: "Password is required" }}
             errors={errors}
             type="password"
             placeholder="Password..."
             autoComplete="false"
            />
          </div>
        </div>

        <Link to={`/`}>Forgot Password</Link>

        <div className="form-row">
          <div className="full-width">
            <button className="btn" disabled={disabled}> {disabled ? "Submitting..." : "Sign in" } </button>
            
          </div>
        </div>

        <div className="full-width" style={{ textAlign: "center", fontSize: "14px", paddingTop: "10px", paddingBottom: "10px" }}>Or with</div>
      
        <div className="form-row">
            <div className="half-width">
              <button disabled={disabled} type="button" className="btn">Github</button>
            </div>
            <div className="half-width">
              <button disabled={disabled} type="button" className="btn">Google</button>
            </div>
        </div>
        
      </form>

    </div>
  )
}
