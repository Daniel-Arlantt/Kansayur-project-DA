import React from "react";
import CarrotLogo from "../images/CarrotLogo.png";
import { Link, useNavigate  } from "react-router-dom";
import Market from "../images/Market.png";
import { auth } from "../data/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";

export const Inicio = () => {
  const provider = new GoogleAuthProvider();
  const navegator = useNavigate();

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        setTimeout(() => {
          navegator("/Login");
        }, 3000);

        toast.success("Sesion iniciada correctamente con Google");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        toast.error("No pudo ingresar el usuario con Google");
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        
      });
  };
  return (
    <div className="grid relative">
      <Toaster position="top-center" />
      <div className="absolute z-10 bg-[#53b97c] -left-20 w-[130vw] h-[52vh] rounded-b-[230px] rounded-bl-[200px]"></div>
      <div className="col-span-12 flex flex-wrap justify-center gap-2 pt-10 z-20">
        <h1 className="main-tittle self-center mb-10 text-white text-4xl">
          Kangsayur
        </h1>
        <img className="w-9 h-9" src={CarrotLogo} alt="Carrot Logo" />
        <img src={Market} alt="Market" />
      </div>

      <div className="col-span-12 text-center flex flex-col mx-5 gap-4 mt-8">
        <Link
          to="/Login"
          className="bg-[#4CAD73] text-white font-medium py-2 px-8 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
        >
          Login
        </Link>
        <Link
          to="/Register"
          className="bg-white text-[#4CAD73] font-medium py-2 px-8 rounded-lg border border-[#4CAD73] hover:bg-green-50 transition duration-300"
        >
          Register
        </Link>

        <p className="text-gray-500">Or login with</p>

        <button
          className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-medium py-2 px-6 rounded-lg gap-3 hover:bg-gray-100 transition duration-300"
          onClick={handleGoogle}
        >
          <img
            src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
            alt="Google logo"
            className="w-5 h-5"
          />
          Google
        </button>

        <button className="flex items-center justify-center bg-[#1877F2] text-white font-medium py-2 px-6 rounded-lg gap-3 hover:bg-[#156db1] transition duration-300">
          <img
            src="https://www.vectorlogo.zone/logos/facebook/facebook-official.svg"
            alt="Facebook logo"
            className="w-5 h-5"
          />
          Facebook
        </button>
      </div>
    </div>
  );
};

export default Inicio;
