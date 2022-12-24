import { useState } from "react";

import { useDispatch } from "react-redux";
import { addPolitician } from "../../https/postPolitician";

import { postsImage } from "../../https/uploadImage";
import { useForm } from "react-hook-form";

export const ModalFormComponent = () => {
    // const [image, setImage] = useState(null);

    const dispatch = useDispatch();
    const token = window.sessionStorage.getItem("token").replace(/['"]+/g, '')
 

    const { register, formState: {errors}, handleSubmit } = new useForm();

    // const onImageChange = (e) => {
    //     if (e.target.files && e.target.files[0]) {
    //       let img = e.target.files[0];
    //       setImage(img);
    //     }
    //     console.log("hello")
    // };

    const onSubmit = (data) => {
        const valor = new FormData();
        const filename = data.image[0].name;
        valor.append("name", filename);
        valor.append("file", data.image[0]);
        postsImage(valor).then((res) => add(res, data),
        );
        
       
    }

    const add = (res, data) => {
        data.profile_image = res.URL
        addPolitician(data, token).then(
            (response) => console.log(response),
            setTimeout(() => {
                document.location.reload();
              }, 3000)
            )
        .catch((e) => console.log(e));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <div className="mb-3">
                <label htmlFor="name">Nombre</label>
                <input
                    name="name"
                    className="form-control" 
                    type="text" 
                    id="name"
                    {...register("name", {required: true})}
                    aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name?.type === 'required' && <div className="text-danger">Escriba el nombre</div>}
            </div>

            <div className="mb-3">
                <label htmlFor="organization">Organización</label>
                <input
                    name="organization"
                    className="form-control" 
                    type="text" 
                    id="organization"
                    {...register("organization", {required: true})}
                    aria-invalid={errors.organization ? "true" : "false"}
                />
                {errors.organization?.type === 'required' && <div className="text-danger">Escriba la organización</div>}
            </div>

            <div className="mb-3">
                <label htmlFor="description">Descripción</label>
                <input
                    name="description"
                    className="form-control" 
                    type="text" 
                    id="description"
                    {...register("description", {required: true})}
                    aria-invalid={errors.description ? "true" : "false"}
                />
                {errors.description?.type === 'required' && <div className="text-danger">Escriba la descripción</div>}
            </div>

            <div className="mb-3">
                <label htmlFor="image">Imagen</label>
                <input
                    name="image"
                    className="form-control" 
                    type="file" 
                    id="image"
                    {...register("image", {required: false})}
                    aria-invalid={errors.image ? "true" : "false"}
                />
            </div>
            
            <div className="mb-3">
                <label htmlFor="reference">Referencia</label>
                <input
                    name="reference"
                    className="form-control" 
                    type="text" 
                    id="reference"
                    {...register("reference", {required: true})}
                    aria-invalid={errors.reference ? "true" : "false"}
                />
                {errors.reference?.type === 'required' && <div className="text-danger">Escriba la referencia</div>}
            </div>
            <button id="add" className="btn btn-primary">Guardar</button>
        </form>
        
    );
}