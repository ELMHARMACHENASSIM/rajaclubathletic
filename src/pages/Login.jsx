import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <section className="pt-[130px] sectionLogin h-[100vh]">
        <div className="Mycontainer  h-[100%] flex justify-center items-center">
          <div className="w-[500px] flex justify-center items-center flex-col h-[fit-content] py-[20px] bg-[white] ">
            <div className="text-center ">
              <h1 className="text-[30px] font-pB">Login</h1>
              <p className="text-[20px] font-pR">
                Log in with your email address and password
              </p>
            </div>
            <form method="POST" action="" className="cont ">
              <div className="flex flex-col gap-[10px] py-[20px]">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Example@email.com"
                />
              </div>
              <div className="flex flex-col gap-[10px] py-[20px]">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="*********"
                />
              </div>
              <div className="flex justify-between items-center py-[20px]">
                <label htmlFor="remember_me" className="flex items-center">
                  <input type="checkbox" id="remember_me" name="remember" />
                  <span className="ms-2 text-sm text-gray-600">
                    Remember me
                  </span>
                </label>

                <a
                  className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  href="{{ route('password.request') }}"
                >
                  Forgot your password?
                </a>
              </div>
              <div className="w-[100%] h-[50px] flex justify-center items-center gap-[10px]">
                <div className="w-[50%] h-[100%]">
                  <button
                    type="submit"
                    className="bg-green w-[100%] h-[100%] py-[10px] px-[5px] text-white"
                  >
                    Login
                  </button>
                </div>

                <Link
                  to={"/register"}
                  className="w-[50%] h-[100%] py-[10px] px-[5px] border-green border-[1px] text-center"
                >
                  Signup
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
