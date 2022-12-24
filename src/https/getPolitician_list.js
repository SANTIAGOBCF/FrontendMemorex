import instance from "../base/settings/axios";

export const getPolitician_list = async () => {
  let result = await instance({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: "/politician/list/?limit=4&offset=0",

  });
  return result;
};
