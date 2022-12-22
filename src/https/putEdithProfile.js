import instance from "../base/settings/axios";

export const putEditProfile = async (data, token) => {
  let result = await instance({
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    url: "users",
    data,
  });
  return result.data;
};
