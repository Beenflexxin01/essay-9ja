import axios from "axios";
import getCookie from "./getCookie";

async function apiCall(url, method = "GET", data = {}, options = {}) {
  try {
    const token = getCookie("authToken");
    if (!token) {
      throw new Error("No authentication token found");
    }

    const headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const response = await axios({
      url,
      method: method.toLowerCase(),
      headers,
      // data: method.toUpperCase() !== "GET" ? JSON.stringify(data) : null,
      // ...options,
      data: method.toUpperCase() !== "GET" ? data : null,
      ...options,
    });

    return response;
  } catch (error) {
    if (error.response) {
      console.error("API call error:", error.response.data);
      if (error.response.status === 401) {
        document.cookie =
          "authToken=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        window.location.href = "/auth/login";
      }
    } else {
      console.error("Network error:", error.message);
    }
    throw error;
  }
}
export default apiCall;
