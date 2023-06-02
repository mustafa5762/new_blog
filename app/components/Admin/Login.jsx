"use client"

import axios from 'axios'
import React, { useState } from 'react'

function Login() {

    const [email, setemail] = useState(null)
    const [pass, setpass] = useState(null)

    const submitHandler = async (e) => {
        e.preventDefault();
        const data = {
          email: email,
          password: pass
        }
        try {
          const res = await axios.post('https://sore-cyan-twill.cyclic.app/api/login', data)
          console.log(res.data)
        } catch (error) {
          console.log(error.response.data)
        }
    }

  return (
    <div>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Sign in to your account
              </h1>
              <form onSubmit={submitHandler} className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                  <input onChange={(e) => setemail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:outline-none focus:border-indigo-600 block w-full p-2.5" placeholder="name@company.com" required />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
                  <input onChange={(e) => setpass(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:outline-none focus:border-indigo-600 block w-full p-2.5" required />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-indigo-300 focus:outline-none" required />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500">Remember me</label>
                    </div>
                  </div>
                  <a href="#" className="text-sm font-medium text-primary-600 hover:underline">Forgot password?</a>
                </div>
                <button type="submit" className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login