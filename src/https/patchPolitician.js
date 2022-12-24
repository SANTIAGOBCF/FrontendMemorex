import instance from "../base/settings/axios";

export const patchPolitician = async (data, token, id) => {
    let result = await instance({
        method: "PATCH",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        url: 'politician/'+Object.values(id),

        data
    });
    console.log(result.url)

    return result.data;
}