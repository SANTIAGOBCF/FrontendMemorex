import instance from "../base/settings/axios";

export const addPost = async (data, token) => {
    let result = await instance({
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "text/plain",
        },
        url: "post/add/",
        data
    });


    return result.data;
}