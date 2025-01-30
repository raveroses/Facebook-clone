const SignupPage = () => {
  return (
    <div className=" bg-gray-100 md:flex md:w-full md:h-full md:justify-start md:items-start md:content-center md:pt-[150px] md:pl-[120px] md:pr-[120px]">
      <div className="md:w-[60%] md:mr-[20px] md:pt-[40px]">
        <div>
          <img
            src="/Images/facebook-logo.svg"
            alt="facebook-logo"
            className="md:w-[280px] "
          />
        </div>
        <h5 className="md:text-[30px] md:pl-[15px] md:font-normal ">
          Facebook helps you connect and share with the people in your life.
        </h5>
      </div>
      <div className="md:bg-gray-200 md:w-[40%] md:rounded md:p-5">
        <form className="md:flex md:flex-col">
          <input
            type="text"
            placeholder="Email address or Phone number"
            className="md:p-3 border-[1px] md:border-solid md:border-white md:rounded md:mb-[10px] md:placeholder:text-10"
          />
          <input
            type="text"
            placeholder="Password"
            className="md:p-3 border-[1px] md:border-solid md:border-white md:rounded md:mb-[10px] md:placeholder:text-10"
          />
          <button className="md:bg-blue-600 md:p-[10px] md:mt-[10px] md:text-[16px] md:font-bold md:text-white md:rounded">
            Login
          </button>
          <a
            href=""
            className="md:text-center md:text-[13.5px] md:text-blue-600 md:border-b-1 md:pb-5 md:mt-4"
          >
            Forgotten Password?
          </a>
          <button className="md:bg-green-500 md:text-center md:mt-10 md:ml-20 md:mr-20 md:p-3 md:text-white md:font-bold md:text-14 rounded">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignupPage;
