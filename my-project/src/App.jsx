 import axios from "axios";
 import { useState } from 'react';
import './App.css'

function App() {

  const [user, setUser] = useState({name: '', email:'', age:''})

  const handleChange = (e) =>(
    setUser({...user,[e.target.name] : e.target.value})
  )

  // const handleClick = ()=>{
  //   // setUser((prevUser) => ({ ...prevUser, ...user }));
  //   const updatedUser = { ...user };
  //   console.log(updatedUser);
  // }
 const handleClick = async () => {
   // Assume `user` is the state that you want to send to the backend
   const updatedUser = { ...user };

   try {
     const response = await fetch("http://localhost:3001/users", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(updatedUser),
     });

     if (!response.ok) {
       throw new Error("Network response was not ok");
     }

     const result = await response.json();
     console.log("Success:", result);
   } catch (error) {
     console.error("Error:", error);
   }
 };


  const {name,email,age} = user
 

  return (
    <>
      <div className="max-w-4xl mx-auto font-[sans-serif] p-6">
        <div className="text-center mb-16">
          <a href="">
            <img
              src="https://readymadeui.com/readymadeui.svg"
              alt="logo"
              className="w-52 inline-block"
            />
          </a>
          <h4 className="text-gray-800 text-base font-semibold mt-6">
            Sign up into your account
          </h4>
        </div>

        <form>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label className="text-gray-800 text-sm mb-2 block"> Name</label>
              <input
                name="name"
                type="text"
                value={name}
                onChange={handleChange}
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter name"
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Email Id
              </label>
              <input
                name="email"
                type="text"
                value={email}
                onChange={handleChange}
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter email"
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Age</label>
              <input
                name="age"
                type="age"
                value={age}
                onChange={handleChange}
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter your age"
              />
            </div>
            {/* <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Mobile No.
              </label>
              <input
                name="number"
                type="number"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter mobile number"
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Password
              </label>
              <input
                name="password"
                type="password"
                // value={password}
                onChange={handleChange}
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter password"
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Confirm Password
              </label>
              <input
                name="cpassword"
                type="password"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter confirm password"
              />
            </div> */}
          </div>

          <div className="!mt-12">
            <button
              onClick={handleClick}
              type="button"
              className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App
