"use client";

// import { Button } from "@/components/ui/button";
import Button from "react-bootstrap/Button";

import { useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import ClipLoader from "react-spinners/ClipLoader";
// import { login } from "@/app/actions/auth";
// import { setUser } from "@/app/redux/features/slices/Auth/authentication";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import { setCookie, hasCookie } from "react-cookie";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";

import logo from "/images/logo.png";

const defaultValues = {
  email: "",
  password: "",
};

function Login() {
  const router = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(defaultValues);

  const { loginWithRedirect } = useAuth0();

  const togglePassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  // const hasToken = (token) => {
  //   return hasCookie(token, {
  //     maxAge: 30 * 24 * 60 * 60,
  //     path: "/",
  //   });
  // };

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      let userData = {
        email: data.email,
        password: data.password,
      };
      const response = await loginWithRedirect(userData);
      if (response.error === false) {
        const { user } = response.data;
        toast.success(response.message);
        // if (!hasToken("token")) {
        //   setCookie("token", response.data.tokens.accessToken, {
        //     maxAge: 30 * 24 * 60 * 60,
        //     path: "/",
        //   });
        // }
        // dispatch(setUser(user));
        // reset(defaultValues);
        // router.push("/users/dashboard");
        return;
      } else {
        let errorMessage = response.message;
        toast.error(errorMessage);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="form-container">
        <div className="align">
          <NavLink to="/home">
            <img src={logo} alt="Logo" className="logo login-logo" />
          </NavLink>
          <h2 className="secondary-header">👋Welcome Admin</h2>
          <p className="login-text">
            Login to your dashboard to tract the progress of your work or give
            out a project
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 md:space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm md:text-base font-medium text-gray-900 dark:text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "This field is required",
              })}
              className={`${errors.email && "error"} input login-input`}
              placeholder="E.g. john@gmail.com"
            />
            {errors.email && (
              <span className="input-error">
                {errors.email?.message?.toString()}
              </span>
            )}
          </div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm md:text-base font-medium text-gray-900 dark:text-gray-300">
            Password
          </label>
          <div className="relative">
            <input
              type={!showPassword ? "password" : "text"}
              id="password"
              {...register("password", {
                required: "This field is required",
              })}
              className={`${errors.password && "error"} input login-input`}
              placeholder="*********"
            />
            {errors.password && (
              <span className="input-error">
                {errors.password?.message?.toString()}
              </span>
            )}
            <div onClick={togglePassword} className="absolute">
              {showPassword ? (
                <AiOutlineEyeInvisible
                  className={`w-6 h-6 ${errors.password && "text-red-900"}`}
                  size={"20px"}
                />
              ) : (
                <AiOutlineEye
                  className={`w-6 h-6 ${errors.password && "text-red-900"}`}
                  size={"20px"}
                />
              )}
            </div>
          </div>
          <Link to="/forgot-password" className="password">
            Forgot Password?
          </Link>

          <div className="">
            <Button
              type="submit"
              className="w-full py-6 bg-primary text-background hover:bg-primary-800">
              {isLoading ? (
                <>
                  <div className="flex items-center justify-center space-x-3">
                    <ClipLoader
                      color={"#ffffff"}
                      loading={isLoading}
                      size={20}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                    <p className="capitalize">Loading...</p>
                  </div>
                </>
              ) : (
                "Log In"
              )}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
