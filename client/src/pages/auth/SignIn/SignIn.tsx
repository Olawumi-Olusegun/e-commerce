import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { SignInSchema } from "../../../validations/authValidation";
import TextInput from "../../../components/TextInput";
import "./SignIn.css";



export type SignInType = z.infer<typeof SignInSchema>;

export default function SignIn() {

  const navigation = useNavigate();

  const { control, handleSubmit, reset, formState: { errors, isDirty, isValid, isSubmitting } } = useForm<SignInType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(SignInSchema),
    mode: "all"
  });

  const disabled = !isDirty || !isValid || isSubmitting;
  
const handleFormSubmit = async (SignInData: SignInType) => {
        try {
          
          const response = await fetch('/api/v1/auth', {
            method: 'POST',
            body: JSON.stringify(SignInData),
            headers: {
              "Content-Type": "application/json"
            },
          });
          
          const { message } = await response.json();

          if(!response.ok) {
            console.log(message)
          }
          reset();
          window.location.reload()
          navigation('/');
          
        } catch (error) {
          console.log(error);
        }
}


  return (
    <div className="form-container">
      
      <div className="form-logo">
        <h4>E-commerce</h4>
      </div>

      <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>

      <h2>Signin</h2>
      <p>New here? <Link to="/signup">Sign up for an account.</Link> </p>
        
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
             id="email"
            />
          </div>

          {/* 
          <div className="half-width">
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" placeholder="Password" />
          </div> 
          */}

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
             id="password"
             placeholder="Password..."
             autoComplete="false"
            
            />
          </div>
        </div>

        <Link to={`/`}>Forgot Password</Link>

        <div className="form-row">
          <div className="full-width">
            <button className="btn" disabled={disabled}> {isSubmitting ? "Submitting..." : "Sign in" } </button>
          </div>
        </div>

        <div className="full-width" style={{ textAlign: "center", fontSize: "14px", paddingTop: "10px", paddingBottom: "10px" }}>Or with</div>
      
        <div className="form-row">
            <div className="half-width">
              <button disabled={isSubmitting} type="button" className="btn">Github</button>
            </div>
            <div className="half-width">
              <button disabled={isSubmitting} type="button" className="btn">Google</button>
            </div>
        </div>
        
      </form>

    </div>
  )
}
