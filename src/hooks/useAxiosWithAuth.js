import axios from "axios";
import Cookies from "js-cookie"; // Import js-cookie library
const useAxiosWithAuth = () => {
  const instance = axios.create({
    withCredentials: false,
  });

  instance.interceptors.request.use(
    (config) => {
      const token = Cookies.get("authToken"); // Get the token from cookies
      if (token) {
        config.headers.Authorization = `Bearer ${token}`; // Add the token to the request headers
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

export default useAxiosWithAuth;
