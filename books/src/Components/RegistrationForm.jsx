import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import BooksPage from "./HomePage";
import "./RegistrationForm.css";
export default function FormUse() {
  
  
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitted },
  } = useForm({
    // defaultValues: {
      //   firstName: "Kalvium",
      //   lastName: "LPU",
      //   email: "kalvim@community.com",
      // },
    });
    
    //   console.log(watch())
    
    //^ Function that will execute for the data which is submitted
    const password = watch("password");
    const FormSubmitHandler = (data) => {
      console.log("data:", data);
    };
    
    // console.log("errors", errors);
    
    return (
      <div id="form">
      <ToastContainer />
      <fieldset>
        <legend>CREATE ACCOUNT</legend>

        <form onSubmit={handleSubmit(FormSubmitHandler)}>
          {isSubmitSuccessful && (
            <div className="success">
              <p>Registration Successful! 🥂</p>
            </div>
          )}
          <div>
            <label> First Name : </label>
            <input
              type="text"
              name="firstName"
              {...register("firstName", {
                required: "Fill First Name",
                minLength: {
                  value: 4,
                  message: "Minimum 4 characters required",
                },
              })}
            />
            {/* {errors.firstName && <p className="err">{errors.firstName.message}</p>} */}
            <p className="err">{errors.firstName?.message}</p>
          </div>

          <div>
                <label> Email : </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", {
                    required: "Email Required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid Email",
                    },
                  })}
                />
                <p className="err">{errors.email?.message}</p>
          </div>



          <div>
            <label> Password : </label>
            <input
              type="password"
              name="password"
              {...register("password", {
                required: "Password Required",
                minLength: {
                  value: 8,
                  message: "Minimum 8 characters required",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                  message: "Password Not Valid (Use Special Characters & Numbers)",
                },
              })}
            />
            <p className="err">{errors.password?.message}</p>
          </div>
              
          <div>
            <label> Confirm Password : </label>
            <input
              type="password"
              name="Confirmpassword"
              {...register("Confirmpassword", {                                                                   
                required: "Re-type your Required",
                validate: (value) => value === password,
                message:"Passwords do not match!",
                minLength: {
                  value: 8,
                  message: "Minimum 8 characters required",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                  message: "Password Not Valid (Use Special Characters & Numbers)",
                },
              })}
            />
            <p className="err">{errors.password?.message}</p>
          </div>

          <div>
            <input type="submit" value="SIGN UP" />
          </div>
          {/* <button onClick={()=>{reset}}>RESET</button> */}
        </form>
      </fieldset>
    </div>
  );
}