import getCookie from "./getCookie";

const token = getCookie("authToken");
// if (!token) {
//   throw new Error("No authentication token found");
// }

export const auth = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};
