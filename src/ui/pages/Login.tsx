import { useState } from "react";
import { useLogin } from "../../application/auth/login.use-case";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { loginUser } = useLogin();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const username = (formData.get("username") as string) ?? "";
    const password = (formData.get("password") as string) ?? "";

    // TODO: you can use your infrastructure like react-query/SWR or your own useApi
    try {
      setLoading(true);
      await loginUser(username, password);
    } finally {
      setTimeout(() => setLoading(false), 1000);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="w-full h-full flex justify-center items-center">
        <form
          className="flex flex-col justify-center items-center w-[90%] h-[90%] bg-white rounded-lg shadow-md space-y-4 relative"
          onSubmit={onSubmit}
        >
          <h1 className="absolute top-[10%] text-2xl font-bold underline text-slate-900">
            Post Tracker
          </h1>
          <div>
            <div className="ps-1 mb-1 text-slate-700">
              <label htmlFor="username">Username:</label>
            </div>
            <div>
              <Input
                required
                aria-required
                name="username"
                placeholder="Username"
                role="textbox"
              />
            </div>
          </div>
          <div>
            <div className="ps-1 mb-1 text-slate-700">
              <label htmlFor="password">Password:</label>
            </div>
            <div>
              <Input
                required
                aria-required
                type="password"
                name="password"
                placeholder="Password"
                role="textbox"
              />
            </div>
          </div>
          <div>
            <Button
              loading={loading}
              name="loginButton"
              className="w-[220px] mt-10"
              role="button"
            >
              Login
            </Button>
          </div>

          <div className="absolute bottom-5 sm:relative sm:mt-10 sm:bottom-0">
            <p className="text-sm">
              Don't have an account?{" "}
              <Link className="text-blue-500 underline" to="#">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
