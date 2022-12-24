import instance from "../base/settings/axios";

export const postsImage = async (data) => {
    let result = await instance({
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        //   Authorization: `Bearer ${token}`,
      },
      url: "image/upload",
      data,
    });
    return result.data;
  };