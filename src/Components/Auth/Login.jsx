import React, { useState, useCallback } from "react";
import { useFormik } from "formik";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useAxiosWithAuth from "../../hooks/useAxiosWithAuth"; //
import logo from "/images/logo.png";
import { BaseUrl } from "../../Utils/BaseUrl";
import { AxiosError } from "axios";
import { loginValidatorSchema } from "../../Utils/Validator";

import Cookies from "js-cookie";
import { toast } from "react-toastify";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const isAuthenticated = useIsAuthenticated();
  const signIn = useSignIn();
  const [showPassword, setShowPassword] = useState(false);
  const axios = useAxiosWithAuth();

  const navigate = useNavigate();

  const togglePassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  const onSubmit = async (values, { resetForm }) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${BaseUrl}/auth/login`, values);
      if (response.status === 200) {
        const { tokens } = response.data.data;
        const { accessToken, refreshToken } = tokens;

        Cookies.set("authToken", accessToken, {
          path: "/",
          expires: 1,
          sameSite: "Strict",
        });

        signIn({
          auth: {
            token: accessToken,
            expiresIn: 36000,
            tokenType: "Bearer",
          },
          userState: { email: values.email },
          refreshToken: refreshToken,
          refreshTokenExpireIn: 86400,
        });

        resetForm();

        toast.success("Login Successful ...");

        navigate("/home");
      } else {
        setError("Access Token is missing from the response.");
      }
    } catch (err) {
      if (err && err instanceof AxiosError)
        setError(err.response?.data.message);
      else if (err && err instanceof Error) setError(err.message);
      console.log("Error: ", err);
      toast.error(`${error}`);
      // toast.error(
      //   `Unable to login! Please check your login credentials and try again! ${error}`
      // );
    } finally {
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidatorSchema,
    onSubmit,
  });

  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  } else {
    return (
      <div className="form-container">
        <div className="align">
          <NavLink to="">
            <img src={logo} alt="Logo" className="logo login-logo" />
          </NavLink>
          <h2 className="secondary-header">👋Welcome Admin</h2>
          <p className="login-text">
            Login to your dashboard to track the progress of your work or give
            out a project
          </p>
        </div>
        <form onSubmit={formik.handleSubmit} className="space-y-4 md:space-y-6">
          <div className="relative">
            <label
              htmlFor="email"
              className="block mb-2 text-sm md:text-base font-medium text-gray-900 dark:text-gray-300"
            >
              Email Address
            </label>
            <input
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              id="email"
              className={`${formik.errors.email && "error"} input login-input`}
              placeholder="E.g. john@gmail.com"
            />
            {formik.touched.email && formik.errors.email && (
              <span className="input-error">{formik.errors.email}</span>
            )}
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block mb-2 text-sm md:text-base font-medium text-gray-900 dark:text-gray-300"
            >
              Password
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              id="password"
              className={`${formik.errors.password && "error"} input login-input`}
              placeholder="*********"
            />
            {formik.touched.password && formik.errors.password && (
              <span className="input-error">{formik.errors.password}</span>
            )}
            <div onClick={togglePassword} className="absolute">
              {showPassword ? (
                <AiOutlineEyeInvisible
                  className={`w-6 h-6 ${formik.errors.password && "text-red-900"}`}
                  size={"20px"}
                />
              ) : (
                <AiOutlineEye
                  className={`w-6 h-6 ${formik.errors.password && "text-red-900"}`}
                  size={"20px"}
                />
              )}
            </div>
          </div>
          <div className="forgot-password">
            <Link to="/forgot-password" className="password">
              Forgot Password?
            </Link>
          </div>

          <div className="align">
            <Button
              type="submit"
              className=" login"
              disabled={formik.isSubmitting}
            >
              {isLoading ? (
                <div className="">
                  <p className="capitalize">Log In</p>
                </div>
              ) : (
                "Log In"
              )}
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
