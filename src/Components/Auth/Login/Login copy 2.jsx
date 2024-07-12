"use client";

// import { Button } from "@/components/ui/button";
import Button from "react-bootstrap/Button";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import ClipLoader from "react-spinners/ClipLoader";
// import { login } from "@/app/actions/auth";
import { setUser } from "@/app/redux/features/slices/Auth/authentication";
import { Link, useNavigate } from "react-router-dom";
import { setCookie, hasCookie } from "react-cookie";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";

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
  } = useForm < FieldValues > { defaultValues };

  const { loginWithRedirect } = useAuth0();

  const togglePassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  const hasToken = (token) => {
    return hasCookie(token, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
  };

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
        if (!hasToken("token")) {
          setCookie("token", response.data.tokens.accessToken, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          });
        }
        // dispatch(setUser(user));
        reset(defaultValues);
        router.push("/users/dashboard");
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
            className={`${
              errors.email &&
              "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm md:text-base placeholder:text-sm md:placeholder:text-base rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-3 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
            } block w-full p-3 text-sm md:text-base placeholder:text-sm md:placeholder:text-base text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light`}
            placeholder="E.g. john@gmail.com"
          />
          {errors.email && (
            <span className="mt-2 text-sm md:text-base text-red-600">
              {errors.email?.message?.toString()}
            </span>
          )}
        </div>
        <div className="relative">
          <label
            htmlFor="password"
            className="block mb-2 text-sm md:text-base font-medium text-gray-900 dark:text-gray-300">
            Password
          </label>
          <input
            type={!showPassword ? "password" : "text"}
            id="password"
            {...register("password", {
              required: "This field is required",
            })}
            className={`${
              errors.password &&
              "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm md:text-base placeholder:text-sm md:placeholder:text-base rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-3 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
            } block w-full p-3 text-sm md:text-base placeholder:text-sm md:placeholder:text-base text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light`}
            placeholder="*********"
          />
          {errors.password && (
            <span className="mt-2 text-sm md:text-base text-red-600">
              {errors.password?.message?.toString()}
            </span>
          )}
          <div
            onClick={togglePassword}
            className="absolute cursor-pointer top-12 right-3">
            {showPassword ? (
              <AiOutlineEyeInvisible
                className={`w-6 h-6 ${errors.password && "text-red-900"}`}
              />
            ) : (
              <AiOutlineEye
                className={`w-6 h-6 ${errors.password && "text-red-900"}`}
              />
            )}
          </div>
        </div>
        <Link href="/auth/forgot-password">
          <span className="mt-2 text-sm text-primary">Forgot Password?</span>
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
    </>
  );
}

export default Login;
