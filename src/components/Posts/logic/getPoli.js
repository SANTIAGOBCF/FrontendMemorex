import instance from "../../../base/settings/axios"
import { endPoint } from "../../../base/settings/config"

export const getPoliticianList = async () => {
    let res= await instance.get(
        endPoint().getPoliticianList
        ,{
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNhMTQ4ODZiLTU4MDUtNDVkMy1hZDE4LTY1NWM5NDc5OThhMyJ9.N1hF6or-_-SARXIfJeXYg1tJGuX46qJOiC7XehFfZFY"
        }
    })

    let result = await res.data;
    return result;
}