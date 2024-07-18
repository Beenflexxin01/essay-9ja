// hooks/apiCall.js
import axios from "axios";
import getCookie from "./getCookie";

async function apiCall(url, options = {}) {
  try {
    const token = getCookie("authToken"); // Read the token from the cookie
    if (!token) {
      throw new Error("No authentication token found");
    }

    console.log(token);

    const headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };

    const response = await axios({
      url,
      headers,
      ...options,
    });
    return response.data; // Return response data
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized. Redirecting to login...");
      document.cookie = "token=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/"; // Optionally, clear the token
      window.location.href = "/auth/login"; // Redirect to login
    } else {
      console.error("API call error:", error);
      throw error;
    }
  }
}

export default apiCall;
