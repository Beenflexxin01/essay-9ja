// // hooks/apiCall.js
// import axios from "axios";
// import getCookie from "./getCookie";

import axios from "axios";
import getCookie from "./getCookie";

// async function apiCall(url, method = "GET", data = null, options = {}) {
//   try {
//     console.log(`Making ${method} request to: ${url}`); // Debug statement
//     const token = getCookie("authToken");
//     if (!token) {
//       throw new Error("No authentication token found");
//     }

//     const headers = {
//       ...options.headers,
//       Authorization: `Bearer ${token}`,
//     };

//     const normalizedMethod =
//       typeof method === "string" ? method.toLowerCase() : "get";
//     const response = await axios({
//       url,
//       headers,
//       method: normalizedMethod,
//       data: data ? JSON.stringify(data) : null,
//       ...options,
//     });

//     return response.data;
//   } catch (error) {
//     if (error.response && error.response.status === 401) {
//       console.error("Unauthorized. Redirecting to login...");
//       document.cookie = "token=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/"; // Optionally, clear the token
//       // window.location.href = "/auth/login";
//     } else {
//       console.error("API call error:", error);
//       throw error;
//     }
//   }

//   //   return response.data;
//   // } catch (error) {
//   //   console.error("API call error:", error);
//   //   if (error.response) {
//   //     console.error(`Response status: ${error.response.status}`);
//   //     console.error(`Response data: ${JSON.stringify(error.response.data)}`);
//   //   }
//   //   throw error;
//   // }
// }

// export default apiCall;

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
      data: method.toUpperCase() !== "GET" ? JSON.stringify(data) : null,
      ...options,
    });

    // return response; // Return the full response
    return response; // Return the full response
  } catch (error) {
    if (error.response) {
      console.error("API call error:", error.response.data); // Log full error response
      if (error.response.status === 401) {
        document.cookie =
          "authToken=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/"; // Clear the token
        window.location.href = "/auth/login";
      }
    } else {
      console.error("Network error:", error.message); // Log network error
    }
    throw error; // Re-throw the error to be handled in onSubmit
  }

  //   return response.data;
  // } catch (error) {
  //   console.error("API call error:", error);
  //   if (error.response) {
  //     console.error(`Response status: ${error.response.status}`);
  //     console.error(`Response data: ${JSON.stringify(error.response.data)}`);
  //   }
  //   throw error;
  // }
}
export default apiCall;

//   const onSubmit = async (values, { resetForm }) => {
//     setIsLoading(true);

//     const data = {
//       title: values.title,
//       type: values.type,
//       value: values.value,
//     };

//     console.log("Submitting Data:", JSON.stringify(data));
//     const token = getCookie("authToken");
//     if (!token) {
//       throw new Error("No authentication token found");
//     }

//     try {
//       const res = await apiCall(`${BaseUrl}/settings`, "PATCH", data, {
//         headers: {
//           "Content-Type": "application/json",
//           // Include other headers if needed
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       console.log("API Response:", res);

//       if (res.status === 200) {
//         toast.success("Application settings have been successfully updated!");
//         resetForm({
//           title: "",
//           type: "",
//           value: "",
//         });
//       } else {
//         toast.error("Unable to update application settings! Please try again!");
//       }
//     } catch (error) {
//       console.error(
//         "Error updating settings:",
//         error.response ? error.response.data : error
//       );
//       if (error.response && error.response.status === 401) {
//         toast.error("Unauthorized. Please check your authentication token.");
//       } else {
//         toast.error("Failed to update settings. Please try again.");
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };
