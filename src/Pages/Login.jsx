import React from 'react'

const Login = () => {
  return (
    <div>
    <div className=" bg-gray-700 w-[50%] flex flex-col rounded-2xl justify-center p-10 border shadow-lg">
  <h2 className="font-bold text-3xl text-center mb-8 text-white">
    Login
  </h2>

  <div className="mb-5">
    <label className="block text-white mb-1">Username</label>
    <input
      type="text"
      placeholder="Enter username"
      className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
  <div className="mb-6">
    <label className="block text-white mb-1">Password</label>
    <input
      type="password"
      placeholder="Enter password"
      className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
  <button
    className="bg-gray-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-all duration-300 mb-4"
  >
    Login
  </button>
  <a
    href="#"
    className="text-center text-xl text-blue-500 hover:underline"
  >Forgot Password?
  </a>
</div>

      </div>
    
  )
}

export default Login
