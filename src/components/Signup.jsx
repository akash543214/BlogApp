import React, {useState} from 'react'
import authService from '../appwrite/auth'
import {Link ,useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice'
import {Button, Input, Logo} from './index.js'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'
import { Error } from './Error.jsx'
import { Google } from '../pages/Google.jsx'

function Signup() {
    let [error,setError] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm()
    
    const create = async(data) => {
        setError("Creating account....")
       try{
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData));
                navigate("/")
            }
        }catch (error) {
                setError(error.message)
            }
       
    }

    async function googleAuthentication()
    {
      const session = await authService.googleAuth()
      
    }
  return (
    <section>
    <div className="flex items-center justify-center px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        <h2 className="text-center text-2xl font-bold leading-tight text-black">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-gray-600">
          Already have an account?{' '}
          <Link
             to="/login"
             className="font-medium text-primary transition-all duration-200 hover:underline"
            >
             Sign In
            </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(create)} className="mt-8">
          <div className="space-y-5">
            <div>
           
              <div className="mt-2">
                <Input
                label = "Full Name"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Full Name"

                  {...register("fullName", { required: true })}
                aria-invalid={errors.firstName ? "true" : "false"}
        
                />
                   {errors.fullName?.type === "required" && (
                   <Error msg="Name is required"/>
                    )}
              </div>
            </div>
            <div>
             
              <div className="mt-2">
                <Input
                  label = " Email address"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email?.type === "required" && (
                   <Error msg="Email Name is required"/>
                    )}
              </div>
            </div>
            <div>
             
              <div className="mt-2">
                <Input
                label = "Password"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="password"
                  placeholder="Password"
                  {...register("password",
                   { 
                    required: true,
                    minLength: {
                      value: 7
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    }
                      
                  }
                   
                   )}
                  aria-invalid={errors.password ? "true" : "false"}
                  />
                  {errors.password?.type === "required" && (
                     <Error msg="Password Name is required"/>
                      )}
                        {errors.password?.type === "minLength" && (
                     <Error msg="Minimum 7 characters needed"/>
                      )}
                       {errors.password?.type === "pattern" && (
                     <Error msg="Password needs to have atleast one uppercase letter, special character and a number"/>
                      )}
              </div>
            </div>
            <div>
              <button type="submit" className="inline-flex w-full items-center 
              justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7
               text-white hover:bg-black/80">
                Create Account  
              </button>
            </div>
            <Google callback = {googleAuthentication}/>
          </div>
        </form>
        <div className="mt-3 space-y-3">
        
        </div>
      </div>
    </div>
  </section>
  )
}

export default Signup