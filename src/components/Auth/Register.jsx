import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"; 

export const RegisterComponent = () => {
    // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"

    const { register, formState: {errors}, handleSubmit } = new useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="container-fluid d-flex p-0 justify-content-center">
            <form action="" method="" id="register" className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
                <div className="form">
                    <div className="d-flex justify-content-center mb-4">
                    <img src="../src/static/img/logoVertical.png" width="200px" alt="Memorex"/>
                    </div>
                    <h1>Crear Cuenta</h1>
                    <div className="grupo">
                        <input 
                            name="firstname"
                            className="form-control" 
                            type="text" 
                            id="name"
                            {...register("firstname", {required: true})}
                            aria-invalid={errors.firstname ? "true": "false"}
                        />
                        <span className="barra "></span>
                        <label htmlFor="name">Nombre(s)</label>
                        {errors.firstname?.type === 'required' && <div className="text-danger">Escriba su nombre</div>}

                    </div>
                    
                    <div className="grupo">
                        <input 
                            name="lastname"
                            className="form-control"
                            type="text" 
                            id="apellido"
                            {...register("lastname", {required: true})}
                            aria-invalid={errors.lastname ? "true": "false"} 
                        />
                        <span className="barra "></span>
                        <label htmlFor = "apellido">Apellidos</label>
                        {errors.lastname?.type === 'required' && <div className="text-danger">Escriba sus apellidos</div>}
                    </div>
                    
                    <div className="grupo">
                        <input 
                            name="email"
                            className="form-control" 
                            type="email" 
                            id="email" 
                            {...register("email", {required: true})}
                            aria-invalid={errors.email ? "true": "false"}
                        />
                        <span className="barra "></span>
                        <label htmlFor="email">Correo</label>
                        {errors.email?.type === 'required' && <div className="text-danger">Escriba su correo</div>}
                    </div>
                    
                    <div className="grupo">
                        <input 
                            name="password" 
                            className="form-control" 
                            type="password" 
                            id="password" 
                            {...register("password", {required: true})}
                            aria-invalid={errors.email ? "true": "false"}     
                        />
                        <span className="barra "></span>
                        <label htmlFor ="password"> Contraseña</label>
                        {errors.password?.type === 'required' && <div className="text-danger">Escriba su contraseña</div>}
                    </div>
        
                    <div className="terminos">
                        <input className="" type="checkbox" id="terminos" required/>
                        <label htmlFor="terminos">Acepto los <a href="">términos y condiciones</a> del sitio web.</label>
                    </div>
                    
                    <button id="registrar">REGISTRAR</button>

                    <div className="extra">
                        <Link to={"/login"}>¿Ya tienes una cuenta? Inicia sesión aquí</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}