import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/compo.css";
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import Oauth from "../components/Oauth";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        // setLoading(false);
        // setError(data.message);
        dispatch(signInFailure(data.message))
        return;
      }
      // setLoading(false);
      // setError(null);
      dispatch(signInSuccess(data))
      navigate("/");
    } catch (error) {
      // setLoading(false);
      // setError(error.message);
      dispatch(signInFailure(error.message))
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen dark shadow-md">
  <div className="card">
    <div className="w-full md:max-w-md bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-center text-gray-200 mb-6 gap-5">
        Sign-IN
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          placeholder="Email address"
          className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="email"
          id="email"
          onChange={handleChange}
        />
        <input
          placeholder="Password"
          className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="password"
          id="password"
          onChange={handleChange}
        />
        <div className="flex items-center justify-between flex-wrap">
          {/* <label className="text-sm text-gray-200 cursor-pointer" htmlFor="remember-me">
          <input className="mr-2" id="remember-me" type="checkbox" />
          Remember me
        </label>
        <a className="text-sm text-blue-500 hover:underline mb-0.5" href="#">
          Forgot password?
        </a> */}
          <p className="text-white mt-4">
            Don't have an account?{" "}
            <Link
              className="text-sm text-blue-500 -200 hover:underline mt-4"
              to="sign-up"
            >
              SignUP
            </Link>
          </p>
        </div>
        <button
          className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
          type="submit"
        >
          SignIN
        </button>
        <Oauth/>
      </form>
    </div>
    {error && <p className="text-red-500 mt-5">{error}</p>}
  </div>
</div>

  );
}
