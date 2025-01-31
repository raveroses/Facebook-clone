import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupPage from "./SignupPage";
const LoginPage = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmission = (e) => {
    e.preventDefault();

    // if (!input.username && !input.password) {
    //   return;
    // }else{

    // }
  };
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/sign-up");
  };
  return (
    <div
      className=" bg-gray-100 flex w-full min-h-screen  pb-10 md:justify-start 
     md:pt-[150px] md:pl-[120px] md:pr-[120px] md:flex-row 
    justify-center flex-col items-center p-[30px]"
    >
      <div className="md:w-[60%] w-full mr-[20px] md:pt-0 pt-[40px] max-w-full ">
        <div>
          <img
            src="/Images/facebook-logo.svg"
            alt="facebook-logo"
            className=" md:w-[280px] w-[200px] max-w-full md:m-0 m-auto "
          />
        </div>
        <h5 className="md:text-[30px] pl-[15px] font-normal text-[25px]">
          Facebook helps you connect and share with the people in your life.
        </h5>
      </div>
      <div className="bg-white shadow-2xl md:w-[40%] w-full rounded p-5 max-w-full mt-3">
        <form className="flex flex-col" onSubmit={handleSubmission}>
          <input
            type="text"
            placeholder="Email address or Phone number"
            name="username"
            value={input?.username}
            onChange={handleOnchange}
            className="p-3 border-[1px] border-solid border-gray-200 shadow-md rounded mb-[10px] 
            placeholder:text-[16px] focus:outline-1 focus:outline-blue-600"
            required
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={input?.password}
            onChange={handleOnchange}
            className="p-3 border-[1px] border-solid border-gray-200 shadow-md rounded mb-[10px] placeholder:text-10 
            focus:outline-1 focus:outline-blue-600"
            required
          />
          <button className="bg-blue-600 p-[10px] mt-[10px] text-[16px] font-bold  text-white rounded">
            Login
          </button>
          <a
            href=""
            className="text-center text-[13.5px] text-blue-600 border-b-1 pb-5 mt-4 hover:underline"
          >
            Forgotten Password?
          </a>
          <button
            onClick={handleSignup}
            className="bg-green-500 text-center mt-10 w-[60%] m-auto p-3 text-white font-bold text-14 rounded"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
