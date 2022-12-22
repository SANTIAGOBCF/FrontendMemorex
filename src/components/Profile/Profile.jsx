import Alert from "react-bootstrap/Alert";

import { useForm as newUseForm } from "../../hooks/useForm";

import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { putEditProfile } from "../../https/putEdithProfile";
import InputsForm from "../Admin/InputsForm";
import { updateData } from "../../redux/slices/authSlice";

export const Profile = () => {
  const { token, user } = useSelector((state) => state.authSlice);

  const [isDisabled, enabledForm, disabledForm] = newUseForm();
  const [image, setImage] = useState(null);

  const imgRef = useRef();
  const refForm = useRef();
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    clearErrors,
  } = useForm({ defaultValues: { ...user } });

  useEffect(() => {
    const rF = refForm.current;
    if (isDisabled) {
      rF.removeAttribute("disabled");
    } else {
      rF.setAttribute("disabled", "disabled");
      clearErrors();
    }
  }, [isDisabled]);

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };

  const onSubmit = (values) => {
    const { password, id, ...data } = values;
    if (image) {
      const valor = new FormData();
      const filename = image.name;
      valor.append("name", filename);
      valor.append("file", image);
      // data.image = filename;
      // console.log(data);
    }
    if (password === "") {
      // putEditProfile(data, token)
      //   .then((response) => {
      //     dispatch(editData(response.data));
      //   })
      //   .catch((e) => console.log(e));
      dispatch(updateData(data));
    } else {
      // putEditProfile(values, token)
      //   .then((response) => {
      //     dispatch(editData(response.data));
      //   })
      //   .catch((e) => console.log(e));
      dispatch(updateData(data));
    }
    reset({
      password: "",
    });
    disabledForm();
  };

  return (
    <div className="container editar-usuario">
      <div className="row m-0 p-0" id="item1">
        <div className="col-12 col-md-6 mb-3">
          <div className="header-seccion m-0">
            <h3>Mi Perfil</h3>
          </div>
          <div className="user-bienvenida">
            <h3>Bienvenido {`${user.first_name} ${user.last_name}`}</h3>
          </div>
          <img
            className="rounded-circle mb-3 "
            src={
              image
                ? URL.createObjectURL(image)
                : "../src/static/img/logoBrowser.png"
            }
            id="avatar"
            width="250"
            height="250"
          />
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="image"
              ref={imgRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        <div className="col-12 col-md-6 m-0 p-0">
          <div className="header-seccion">
            <h3>Cambiar datos: </h3>
          </div>
          <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
            <fieldset ref={refForm}>
              <InputsForm label="Nombre(s):">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nuevo Nombre..."
                  {...register("first_name", {
                    required: { value: true, message: "nombre requerido" },
                    minLength: {
                      value: 3,
                      message: "Debe ingresar como minimo 3 caracteres",
                    },
                    pattern: {
                      value: /^[a-zA-Z ]+$/,
                      message: "solo se permiten letras",
                    },
                  })}
                />
              </InputsForm>
              {errors.first_name && (
                <Alert key="dangerName" variant="danger">
                  {errors.first_name.message}
                </Alert>
              )}
              <InputsForm label="Apellidos:">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nuevo Apellido..."
                  {...register("last_name", {
                    required: { value: true, message: "apellido requerido" },
                    minLength: {
                      value: 3,
                      message: "Debe ingresar como minimo 3 caracteres",
                    },
                    pattern: {
                      value: /^[a-zA-Z ]+$/,
                      message: "solo se permiten letras",
                    },
                  })}
                />
              </InputsForm>
              {errors.last_name && (
                <Alert key="dangerApellido" variant="danger">
                  {errors.last_name.message}
                </Alert>
              )}
              <InputsForm label="Email:">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email..."
                  {...register("email", {
                    required: { value: true, message: "email requerido" },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "ingrese un email valido",
                    },
                  })}
                />
              </InputsForm>
              {errors.email && (
                <Alert key="dangerTelefono" variant="danger">
                  {errors.email.message}
                </Alert>
              )}
              {isDisabled && (
                <>
                  <InputsForm label="Contraseña:">
                    <input
                      className="form-control"
                      type="password"
                      {...register("password", {
                        minLength: {
                          value: 8,
                          message: "La longitud tiene que ser como minimo de 8",
                        },
                        pattern: {
                          value:
                            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&+*-]).{8,}$/,
                          message: "Debe incluir un caracter",
                        },
                      })}
                    />
                  </InputsForm>
                  {errors.password && (
                    <Alert key="dangerPassword" variant="danger">
                      {errors.password.message}
                    </Alert>
                  )}
                  <InputsForm>
                    <button
                      type="button"
                      className="btn btn-dark float-right"
                      onClick={() => imgRef.current.click()}
                    >
                      Cambiar Imagen de perfil
                    </button>
                  </InputsForm>
                  <button type="submit" className="btn btn-dark float-right">
                    Cambiar Datos
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger float-left"
                    onClick={disabledForm}
                  >
                    Cancelar
                  </button>
                </>
              )}
            </fieldset>
          </form>
          {!isDisabled && (
            <button
              type="button"
              className="btn btn-dark float-right"
              onClick={enabledForm}
            >
              Modificar Datos
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
