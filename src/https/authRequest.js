import instance from "../base/settings/axios";

export const register = async (data) => {
  let result = await instance({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    url: "user/add/",
    data,
  });
  return result.data;
};

export const login = async (data) => {
  let result = await instance({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    url: "user/login/",
    data,
  });
  return result.data;
};
