import getCookie from "./getCookie";

const token = getCookie("authToken");

export const auth = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};
