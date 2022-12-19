import instance from "../base/settings/axios";

export const dataSignin = async (token) => {
  let result = await instance({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    url: "users",
  });
  return result;
};
