import PoliticianModal from "./Politician"
function Card ({imageSource, name, description, organization, id, created_at, updated_at, reference}) {

    return (

        <div className="card text-center" >
            <img src={imageSource} alt="a wallpaper" className="card-img-top" height={"135"}/>
            <div>
                <h4>{name}</h4>
                <p>
                    Organizacion politica: {organization}
                </p>
                <p>
                    Descripcion: {description}
                </p>
                <PoliticianModal imageSource={imageSource} name={name} description={description} organization = {organization} id ={id} created_at={created_at} updated_at={updated_at} reference={reference}/>
            </div>
        </div>

    )
};
export default Card