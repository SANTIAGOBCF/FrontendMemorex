import { useDispatch } from "react-redux";
import { login } from "../../https/authRequest";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
// add
import { useSelector } from "react-redux";
import { loginSuccess, registerSuccess } from "../../redux/slices/authSlice";
import { getDataUser } from "../../https/userRequest";

export const LoginComponent = () => {
  const dispatch = useDispatch();
  // add
  const { token } = useSelector((state) => state.authSlice);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = new useForm();

  useEffect(() => {
    if (token) navigate("home");
  }, [token]);

  const handleprofile = (token) => {
    getDataUser(token)
      .then((res) => dispatch(registerSuccess(res.data)))
      .catch((e) => console.log(e));
  };

  const onSubmit = (data) => {
    const valor = { email: data.email, password: data.password };
    login(valor)
      .then((response) => {
        dispatch(loginSuccess(response));
        handleprofile(response);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="container login-content d-flex align-middle p-0">
      <form
        action=""
        method=""
        className="align-self-center needs-validation"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="../src/static/img/LoginMemorex.jpg"
              width="200px"
              alt="Memorex logo"
            />
          </div>
          <h1>Iniciar Sesión</h1>

          <div className="grupo">
            <input
              name="email"
              className="form-control"
              type="text"
              id="email"
              {...register("email", { required: true })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            <span className="barra"></span>
            <label htmlFor="email">Correo</label>
            {errors.email?.type === "required" && (
              <div className="text-danger">Escriba su correo</div>
            )}
          </div>

          <div className="grupo">
            <input
              name="password"
              className="form-control"
              type="password"
              id="password"
              {...register("password", { required: true })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            <span className="barra "></span>
            <label htmlFor="password">Contraseña</label>
            {errors.password?.type === "required" && (
              <div className="text-danger">Escriba su contraseña</div>
            )}
          </div>

          <button id="login">INGRESAR</button>
        </div>
        <div className="extra">
          <Link to={"/register"}>¿No tienes cuenta? Regístrate aquí.</Link>
        </div>
      </form>
    </div>
  );
};
