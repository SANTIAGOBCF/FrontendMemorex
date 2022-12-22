import instance from "../base/settings/axios";

export const getDataUser = async (token) => {
  let result = await instance({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    url: "user/me/",
  });
  return result;
};

export const updateDataUser = async (token, data) => {
  let result = await instance({
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    url: "user/me/",
  });
  return result;
};
