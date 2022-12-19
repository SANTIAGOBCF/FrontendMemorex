import instance from "../base/settings/axios";

export const authSignin = async (data) => {
  let result = await instance({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    url: "auth/token",
    data,
  });
  return result.data;
};
