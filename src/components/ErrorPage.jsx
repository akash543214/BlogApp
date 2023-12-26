'use client'

import React from 'react'
import { Menu, X, ArrowLeft } from 'lucide-react'
import {Link ,useNavigate} from 'react-router-dom'

export function ErrorPage() {
 

  <Link
  to="/login"
  className="font-medium text-primary transition-all duration-200 hover:underline"
 >
  Sign In
 </Link>
  return (
    <div className="mx-auto w-full max-w-7xl px-2 md:px-4">
     
      <div className="my-12 flex items-center justify-center px-2 md:my-24 md:px-0">
        <div className="lg:flex lg:items-center lg:space-x-10">
        
          <div>
            <p className="mt-6 text-sm font-semibold text-black">Membership only page</p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
             You need to create account to read posts!
            </h1>
            <p className="mt-4 text-gray-500">
              Create a new account or login if you are already a member!
            </p>
            <div className="mt-6 flex items-center space-x-3">
            <Link
        to="/login"
        className="font-medium text-primary transition-all duration-200 hover:underline"
              >
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <ArrowLeft size={16} className="mr-2" />
               Login
              </button>
              </Link>

              <Link
        to="/signup"
        className="font-medium text-primary transition-all duration-200 hover:underline"
              >
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Create account
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}
