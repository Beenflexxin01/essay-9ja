// import getCookie from "./getCookie";

// async function apiCall(url, method = "GET", body = null) {
//   const token = getCookie("authToken");
//   const headers = {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${token}`,
//   };

//   const options = {
//     method,
//     headers,
//   };

//   if (body) {
//     options.body = JSON.stringify(body);
//   }

//   try {
//     const response = await fetch(url, options);

//     if (!response.ok) {
//       if (response.status === 401) {
//         throw new Error(
//           "Unauthorized: Please check your authentication token."
//         );
//       }
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("API call error:", error.message);
//     throw error;
//   }
// }

// export default apiCall;

// // hooks/apiCall.js
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
