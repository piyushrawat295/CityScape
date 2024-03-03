import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen dark shadow-md">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-gray-200 mb-6 gap-5">
          Sign-UP
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            placeholder="Username"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            id="username"
            onChange={handleChange}
          />
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
              Alrready have an account?{" "}
              <Link
                className="text-sm text-blue-500 -200 hover:underline mt-4"
                to="sign-in"
              >
                SignIN
              </Link>
            </p>
          </div>
          <button
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            type="submit"
          >
            SignUP
          </button>
        </form>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
}
