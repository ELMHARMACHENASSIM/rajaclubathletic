import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div>
      <section className="pt-[130px] sectionLogin  h-[100vh]">
        <div className="Mycontainer h-[100%] flex justify-center items-center">
        <div className="w-[500px] flex justify-center items-center flex-col h-[fit-content] py-[20px] bg-[white] ">
          <div className="text-center ">
            <h1 className="text-[30px] font-pB">
              Welcome to Raja Club Athletic
            </h1>
            <p className="text-[20px] font-pR">
              Sign up to create your account
            </p>
          </div>
          <form
            method="POST"
            action=""
            className="cont"
          >
            <div className="flex flex-col gap-[10px] py-[10px]">
              <label htmlFor="fullname">Fullname</label>
              <input type="text" name="fullname" placeholder="Fullname" />
            </div>
            <div className="flex flex-col gap-[10px] py-[10px]">
              <label htmlFor="phone">Phone</label>
              <input type="number" name="phone" placeholder="06********" />
            </div>
            <div className="flex flex-col gap-[10px] py-[10px]">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Example@gmail.com"
              />
            </div>
            <div className="flex flex-col gap-[10px] py-[10px]">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="*********"
                id="password"
              />
            </div>
            <div className="flex flex-col gap-[10px] py-[10px]">
              <label htmlFor="password_confirmation">Confirm Password</label>
              <input
                type="password"
                name="password_confirmation"
                placeholder="*********"
                id="password_confirmation"
              />
            </div>

            <div className="mt-4 py-[10px]">
              <label htmlFor="terms ">
                <div className="flex items-center gap-[10px]">
                  <input type="checkbox" name="terms" id="terms" required /><span>I agree to the terms of service and privacy policy</span>
                </div>
              </label>
            </div>

            <div className="w-[100%] h-[50px] flex justify-center items-center gap-[10px]">
              <div className="w-[50%] h-[100%]">
                <button
                  type="submit"
                  className="bg-green w-[100%] h-[100%] py-[10px] px-[5px] text-white"
                >
                  Signup
                </button>
              </div>

              <Link
                to={"/login"}
                className="w-[50%] h-[100%] py-[10px] px-[5px] border-green border-[1px] text-center"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
