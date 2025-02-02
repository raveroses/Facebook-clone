import { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import useFetch from "./API/UseFetch";
import Custom from "./API/Custom";
export default function SignupPage() {
  const shortMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  //   {
  //     day: null,
  //     year: null,
  //     month: "",
  //   }
  const [dateOfBirth, setDateOfBirth] = useState(() => {
    const RetrieveValue = localStorage.getItem("save");
    try {
      if (RetrieveValue) {
        return JSON.parse(RetrieveValue);
      }
    } catch (err) {
      console.log(err.message);
    }
    const newDates = new Date();
    return {
      day: newDates.getDate(),
      year: newDates.getFullYear(),
      month: newDates.getMonth(),
    };
  });

  const handleYearOfBirth = (index) => {
    setDateOfBirth((prev) => {
      const UpdatedObj = { ...prev, year: index };
      localStorage.setItem("save", JSON.stringify(UpdatedObj));
      return UpdatedObj;
    });
  };

  const handleDayOfBirth = (index) => {
    setDateOfBirth((prev) => {
      const UpdatedObj = { ...prev, day: index };
      localStorage.setItem("save", JSON.stringify(UpdatedObj));
      return UpdatedObj;
    });
  };
  const handleMonthOfBirth = (index) => {
    setDateOfBirth((prev) => {
      const UpdatedObj = { ...prev, month: index };
      localStorage.setItem("save", JSON.stringify(UpdatedObj));
      return UpdatedObj;
    });
  };

  const month = shortMonths.map((element, index) => {
    return (
      <ul key={index}>
        <li
          className="pb-2 hover:bg-blue-500 hover:text-white"
          onClick={() => handleMonthOfBirth(element)}
        >
          {" "}
          {element}
        </li>
      </ul>
    );
  });

  const years = Array.from({ length: 2025 - 1905 + 1 }, (_, i) => {
    return (
      <ul key={i}>
        <li
          className="pb-2 hover:bg-blue-500 hover:text-white"
          onClick={() => handleYearOfBirth(1905 + i)}
        >
          {" "}
          {1905 + i}
        </li>
      </ul>
    );
  });

  const listDate = Array.from({ length: 31 }, (_, i) => {
    return (
      <ul key={i} className="p-1">
        <li
          className="pb-1 hover:bg-blue-500 hover:text-white"
          onClick={() => handleDayOfBirth(i + 1)}
        >
          {" "}
          {i + 1}
        </li>
      </ul>
    );
  });

  const [formcollection, setFormCollection] = useState(() => {
    const RetrieveValues = localStorage.getItem("saves");
    const converter = RetrieveValues
      ? JSON.parse(RetrieveValues)
      : { firstname: "", surname: "", custom: "", email: "", password: "" };
    return converter;
  });
  const handleFormCollection = (e) => {
    const { name, value } = e.target;
    setFormCollection((savedForm) => {
      const UpdatedValues = { ...savedForm, [name]: value };
      localStorage.setItem("saves", JSON.stringify(UpdatedValues));
      return UpdatedValues;
    });
  };

  const [arrowdown, setArrowDown] = useState({
    DayArrow: false,
    MonthArrow: false,
    YearArrow: false,
  });
  const handleDayArrowDown = () => {
    setArrowDown((prev) => ({
      ...prev,
      DayArrow: !prev.DayArrow,
      YearArrow: false,
      MonthArrow: false,
    }));
    console.log("DAY IS CLICKED");
  };
  const handleMonthArrowDown = () => {
    setArrowDown((prev) => ({
      ...prev,
      MonthArrow: !prev.MonthArrow,
      YearArrow: false,
      DayArrow: false,
    }));
    console.log("MONTH IS CLICKED");
  };
  const handleYearArrowDown = () => {
    setArrowDown((prev) => ({
      ...prev,
      YearArrow: !prev.YearArrow,
      DayArrow: false,
      MonthArrow: false,
    }));
    console.log("YEAR IS CLICKED");
  };

  const [gender, SetGender] = useState(() => {
    const getGender = localStorage.getItem("gender");
    return getGender ? JSON.parse(getGender) : "";
  });

  const handleGender = (e) => {
    SetGender(() => {
      const genderSaved = e.target.value;
      localStorage.setItem("gender", JSON.stringify(genderSaved));
      return genderSaved;
    });
  };
  console.log(gender);

  //   console.log(arrowdown.YearArrow);
  //   console.log(dateOfBirth);
  console.log(formcollection);

  const { data, loading, error, handlePost, handleGet, handlePut } =
    useFetch(Custom);

  console.log(data, loading, error, handlePost, handleGet, handlePut);
  return (
    <div className="bg-gray-100 w-full flex justify-center flex-col items-center ">
      <div>
        <img
          src="/Images/facebook-logo.svg"
          alt="facebook-logo"
          className="w-[280px]"
        />
      </div>
      <div className="bg-white w-[450px] h-auto mb-5 ">
        <div className="text-center">
          <h2 className="text-[26px] font-bold">Create a new account</h2>
          <p className="text-[17px] text-gray-500 border-b-1 border-gray-300 pb-4">
            It's quick and easy.
          </p>
        </div>
        <form className="p-5">
          <div className="flex gap-2 flex-row">
            <input
              type="text"
              placeholder="First name"
              className="border-1 border-solid border-gray-400 p-2 placeholder:text-[17px] rounded"
              name="firstname"
              value={formcollection?.firstname}
              onChange={handleFormCollection}
            />
            <input
              type="text"
              placeholder="Surname"
              className="border-1 border-solid border-gray-400 p-2 placeholder:text-[17px] rounded"
              name="surname"
              value={formcollection?.surname}
              onChange={handleFormCollection}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center text-[12px] text-gray-500 pt-3 font-medium pb-2">
              <p> Date of birth </p>
              <span>
                <FaQuestionCircle />
              </span>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center gap-19 border-1 border-solid border-gray-500 p-[6px] rounded">
                <span className="text-gray-500 font-semibold">
                  {" "}
                  {dateOfBirth?.day}
                </span>
                <IoIosArrowDown
                  className="font-extrabold text-gray-500"
                  onClick={handleDayArrowDown}
                />
              </div>
              <div className="flex items-center gap-19 border-1 border-solid border-gray-500 rounded p-[6px]">
                <span className="text-gray-500 font-semibold">
                  {dateOfBirth?.year}{" "}
                </span>
                <IoIosArrowDown
                  className="font-extrabold text-gray-500"
                  onClick={handleYearArrowDown}
                />
              </div>
              <div className="flex items-center gap-19 border-1 border-solid border-gray-500 rounded p-[6px]">
                <span className="text-gray-500 font-semibold">
                  {" "}
                  {dateOfBirth?.month}{" "}
                </span>
                <IoIosArrowDown
                  className="font-extrabold text-gray-500"
                  onClick={handleMonthArrowDown}
                />
              </div>
            </div>
            <div className="relative">
              <div
                className={`bg-white shadow-xl w-[120px] h-[300px] pb-3 overflow-y-scroll ${
                  arrowdown?.DayArrow ? "block" : "hidden"
                } absolute top-[0px] z-9`}
              >
                {listDate}
              </div>
              <div
                className={`bg-white shadow-xl w-[120px]  h-[300px] pb-3 overflow-y-scroll absolute left-[290px] top-0 ${
                  arrowdown?.MonthArrow ? "block" : "hidden"
                } `}
              >
                {month}
              </div>
              <div
                className={`bg-white shadow-xl w-[120px] h-[300px] pb-3 overflow-y-scroll absolute left-[150px] top-0 ${
                  arrowdown?.YearArrow ? "block" : "hidden"
                }`}
              >
                {years}
              </div>
            </div>
            <div>
              <div className="flex items-center text-[12px] text-gray-500 pt-3 font-medium pb-2">
                <p> Gender</p>
                <span>
                  <FaQuestionCircle />
                </span>
              </div>
              <div className="flex flex-row gap-4">
                <div className="border-1 border-solid border-gray-500 rounded p-1 flex gap-14">
                  <label htmlFor="">Female</label>
                  <input
                    type="radio"
                    value="Female"
                    checked={gender === "Female"}
                    onChange={handleGender}
                  />
                </div>
                <div className="border-1 border-solid border-gray-500 rounded p-1 flex gap-14">
                  <label htmlFor="">Male</label>
                  <input
                    type="radio"
                    value="Male"
                    checked={gender === "Male"}
                    onChange={handleGender}
                  />
                </div>
                <div className="border-1 border-solid border-gray-500 rounded p-1 flex gap-14">
                  <label htmlFor="">Custom</label>
                  <input
                    type="radio"
                    value="Custom"
                    checked={gender === "Custom"}
                    onChange={handleGender}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col pt-3">
              <input
                type="text"
                placeholder="Gender(optional)"
                className={`p-[8px] mb-[10px] rounded border-1 border-solid border-gray-500  ${
                  gender === "Custom" ? "block" : "hidden"
                }
              `}
                name="custom"
                value={formcollection?.custom}
                onChange={handleFormCollection}
              />
              <input
                type="text"
                placeholder="Mobile number or Email address"
                className="p-[8px] rounded border-1 border-solid border-gray-500"
                name="email"
                value={formcollection?.email}
                onChange={handleFormCollection}
              />
              <input
                type="text"
                placeholder="New Password"
                className="p-[8px] rounded border-1 border-solid border-gray-500 mt-3"
                name="password"
                value={formcollection?.password}
                onChange={handleFormCollection}
              />
            </div>
          </div>

          <div className=" pt-5">
            <p className="text-[12px] text-gray-500">
              People who use our service may have uploaded your contact
              information to Facebook. Learn more
            </p>
            <p className="text-[11px] text-gray-500 pt-5">
              By clicking Sign Up, you agree to our Terms, Privacy Policy and
              Cookies Policy. You may receive SMS notifications from us and can
              opt out at any time.
            </p>
          </div>
          <button className="bg-green-600 text-center rounded p-2 text-[17px] font-bold text-white w-[50%] mt-4 ml-[100px] ">
            Sign up
          </button>
          <div className="text-center pt-3">
            <a href="" className="text-blue-600 text-[18px] ">
              Already have an account?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
