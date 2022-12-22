export const patchDataUser = async (token, data) => {
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

export const getAllUsers = async (token) => {
  let result = await instance({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    url: "user/all/",
    data,
  });
  return result.data;
};
