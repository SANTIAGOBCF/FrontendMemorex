import instance from "../base/settings/axios";

export const addPolitician = async (data, token) => {
    let result = await instance({
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "text/plain",
        },
        url: "politician/",
        data
    });


    return result.data;
}