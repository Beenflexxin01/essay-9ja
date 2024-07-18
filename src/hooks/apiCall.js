import getCookie from "./getCookie";

async function apiCall(url, method = "GET", body = null) {
  const token = getCookie("authToken");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const options = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error(
          "Unauthorized: Please check your authentication token."
        );
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API call error:", error.message);
    throw error;
  }
}

export default apiCall;
