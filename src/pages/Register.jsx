import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Market3 from "../images/Market3.png";
import { auth } from "../data/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navegator = useNavigate();

  const handleSumit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
        setTimeout(() =>{
          navegator("/Login")
        }, 3000);
        toast.success("Usuario registrado correctamente")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        toast.error("No se pudo registar el usuario")
      });
  };

  return (
    <div className="grid relative">
      <Toaster position="top-center"/>
      <div className="absolute z-10 bg-[#53b97c] -left-20 w-[130vw] h-[52vh] rounded-b-[230px] rounded-bl-[200px]"></div>
      <div className="col-span-12 flex justify-around pt-10 z-20">
        <Link className="absolute left-10 text-white" to="/">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="2"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>{" "}
        </Link>
        <h1 className="main-tittle self-end mb-10 text-white text-4xl">
          Register
        </h1>
        <img src={Market3} alt="Market" />
      </div>

      <div className="col-span-12 flex flex-col mx-5 gap-4 mt-8">
        <form className="flex flex-col" onSubmit={handleSumit}>
          <label className="main-tittle" for="Email">
            Email
          </label>
          <input
            className="text-black py-2 px-8 rounded-lg shadow-m text-center border bg-gray-50"
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="main-tittle" for="Password">
            Password
          </label>
          <input
            className="text-black py-2 px-8 rounded-lg shadow-m text-center border bg-gray-50"
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-[#4CAD73] text-white font-medium py-2 px-8 rounded-lg shadow-md hover:bg-green-600 transition duration-300 text-center mt-7"
          >
            Register
          </button>
        </form>

        <p className="text-green-400 text-center">
          Do you have an account?
          <Link to="/Login" className="text-green-500 font-bold ms-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
