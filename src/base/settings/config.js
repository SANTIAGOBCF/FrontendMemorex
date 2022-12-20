export const endPoint = ({
    //politician_id,
}) => {
    return {
        //alphabetically
        addPost:`/post/add`,
        getPoliticianById:`/politician/${politician_id}`,
        getPoliticianList:`/politician/list?limit=1&offset=0`,
    }
}