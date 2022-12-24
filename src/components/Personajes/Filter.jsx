import Card from "./Card"
import { useState } from "react"
import AddPoliticianModal from "./Add"
import { getPolitician_list } from "../../https/getPolitician_list";


let res = Object.values(((await (getPolitician_list())).data).politician_list)
let politicos=res

function Filter() {
    const isLogged = Boolean(window.sessionStorage.getItem("token"));

    const [ search, setSearch ] = useState("");
    const [ currentPage, setCurrentPage ] = useState(0)
    const filteredPoliticos = () => {

        if( search.length === 0 ) 
            return politicos.slice(currentPage, currentPage + 3);

        return politicos.filter(politic => politic.name.toLowerCase().includes(search.toLowerCase())).slice(currentPage, currentPage+3);
    }; 
    const onSearchChange = ({ target }) => {
        setCurrentPage(0);
        setSearch( target.value );
    };

    const nextPage = () => {
        if ( politicos.filter(politic => politic.name.toLowerCase().includes(search.toLowerCase())).length > currentPage + 3 )
            setCurrentPage( currentPage + 3 );
    };

    const prevPage = () => {
        if ( currentPage > 0 )
            setCurrentPage( currentPage - 3 );
    };

    return (
        <div>
            <div className="d-flex">
                <div className="input-group d-flex justify-content-center align-items-center">
                    <label className="me-2">Buscar</label>
                    <div className="form-outline">
                        <input type="search" id="form1" className="form-control" onChange={onSearchChange} />
                    </div>
                </div>
                <div>
                    {isLogged == true &&
                        <AddPoliticianModal/>
                    }  
                </div>
            </div>

            

           
            <div className="row">
                    {filteredPoliticos().map(({ name, profile_image, id, description, organization, created_at, updated_at, reference}) => (
                        <div className="col-md-4" key={id}>
                            <Card imageSource={profile_image} name={name} description={description} organization = {organization} id ={id} created_at={created_at} updated_at={updated_at} reference={reference}/>
                        </div>
                    ))}
            </div>
            
            <div className="btn-group">
                <button className="btn btn-primary" onClick={prevPage}>Anterior</button>
                <button className="btn btn-primary" onClick={nextPage}>Siguiente</button>
            </div>
           
        </div>
        
    )
  };
  export default Filter