export default function SignupPage() {
  //   const shortMonths = [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ];
  //   const years = Array.from({ length: 2025 - 1905 + 1 }, (_, i) => 1905 + i);

  // console.log(years);

  return (
    <div className="bg-gray-100 w-full flex justify-center flex-col items-center">
      <div>
        <img
          src="/Images/facebook-logo.svg"
          alt="facebook-logo"
          className="w-[280px]"
        />
      </div>
      <div className="bg-white w-[500px] h-auto ">
        <div className="text-center">
          <h2 className="text-[26px] font-bold">Create a new account</h2>
          <p className="text-[17px] text-gray-500 border-b-1 border-gray-300 pb-4">
            It's quick and easy.
          </p>
        </div>
        <form>
          <div>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Surname" />
          </div>
          <div>
            <label htmlFor="date">Date of birth</label>
          </div>
        </form>
        <div className="">
          <p>
            People who use our service may have uploaded your contact
            information to Facebook. Learn more. By clicking Sign Up, you agree
            to our Terms, Privacy Policy and Cookies Policy. You may receive SMS
            notifications from us and can opt out at any time.
          </p>
        </div>
      </div>
    </div>
  );
}
