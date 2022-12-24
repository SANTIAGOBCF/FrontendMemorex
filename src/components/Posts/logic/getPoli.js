import axios from "axios"


export const getPoliticianList = async () => {
    const res = await axios({
      method: "GET",
      url: "https://backendmemorex-production.up.railway.app/api/politician/list/",
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk3Yjc0MDgwLWQzNTktNGM2OC1iMGQwLWE2NGJjYzNjMjU4NiJ9.fk0xaljZMqm4LbIO_qa25AjKkCoeLhOeaicsBhjIMbU"
      }
    })
    var result=await res.data
    return result.politician_list
};