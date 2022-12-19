import Card from "./Card"
import alan from "../../assets/img/foto_ALAN GARCIA.jpg"
import julio from "../../assets/img/foto_Julio Guzman.jpg"
import fujimori from "../../assets/img/foto_KEIKO FUJIMORI.jpg"
import { useState } from "react"


const politicos = [
    {
        id : 1,
        name :"Alan Garcia",
        image : alan,
    },
    {
        id : 2,
        name :"Julio Guzman",
        image : julio,
    },
    {
        id : 3,
        name :"Keiko Fujimori",
        image : fujimori,
    },
];




function Filter() {
    const [ search, setSearch ] = useState("");
    const filteredPoliticos = () => {

        return politicos.filter(politic => politic.name.toLowerCase().includes(search.toLowerCase()));
    }; 
    const onSearchChange = ({ target }) => {
        setSearch( target.value );
    };

    return (
        <div>
            <div className="input-group d-flex justify-content-center align-items-center">
                <label className="me-2">Buscar</label>
                <div className="form-outline">
                    <input type="search" id="form1" className="form-control" onChange={onSearchChange} />
                </div>
            </div>

            

            <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="row">
                    {filteredPoliticos().map(({ name, image, id }) => (
                        <div className="col-md-4" key={id}>
                            <Card imageSource={image} name={name} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    )
  };
  export default Filter