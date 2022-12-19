import Alert from "react-bootstrap/Alert";

import { useForm as newUseForm } from "../../hooks/useForm";

import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";

import { useDispatch } from "react-redux";
import { putEditProfile } from "../../https/putEdithProfile";
import { setData } from "../../redux/slices/editDataSlice";

export const Profile = ({ token, data }) => {
  const [isDisabled, enabledForm, disabledForm] = newUseForm();
  const refForm = useRef();
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    clearErrors,
  } = useForm({ defaultValues: { ...data } });
  console.log(data);

  useEffect(() => {
    const rF = refForm.current;
    if (isDisabled) {
      rF.removeAttribute("disabled");
    } else {
      rF.setAttribute("disabled", "disabled");
      clearErrors();
    }
  }, [isDisabled]);

  const onSubmit = (values) => {
    const { password, ...data } = values;
    if (password === "") {
      // putEditProfile(data, token)
      //   .then((response) => {
      //     dispatch(editData(response.data));
      //   })
      //   .catch((e) => console.log(e));
      console.log(data);
      dispatch(setData(data));
    } else {
      // putEditProfile(values, token)
      //   .then((response) => {
      //     dispatch(editData(response.data));
      //   })
      //   .catch((e) => console.log(e));
      console.log(values);
      dispatch(setData(data));
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
            <h3>Bienvenido {data?.username}</h3>
          </div>
          <img
            src="../src/static/img/logoBrowser.png"
            id="avatar"
            width="200"
            height="200"
          />
        </div>
        <div className="col-12 col-md-6 m-0 p-0">
          <div className="header-seccion">
            <h3>Cambiar datos: </h3>
          </div>
          <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
            <fieldset ref={refForm}>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Nombres:</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nuevo Nombre..."
                  {...register("username", {
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
              </div>
              {errors.name && (
                <Alert key="dangerName" variant="danger">
                  {errors.name.message}
                </Alert>
              )}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Apellidos:</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nuevo Apellido..."
                  {...register("firstName", {
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
              </div>
              {errors.firstName && (
                <Alert key="dangerApellido" variant="danger">
                  {errors.firstName.message}
                </Alert>
              )}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Teléfono:</span>
                </div>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Teléfono..."
                  {...register("phone", {
                    required: { value: true, message: "telefono requerido" },
                    pattern: {
                      value:
                        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/,
                      message: "ingrese un numero valido",
                    },
                  })}
                />
              </div>
              {errors.phone && (
                <Alert key="dangerTelefono" variant="danger">
                  {errors.phone.message}
                </Alert>
              )}
              {isDisabled && (
                <>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Contraseña:</span>
                    </div>
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
                  </div>
                  {errors.password && (
                    <Alert key="dangerPassword" variant="danger">
                      {errors.password.message}
                    </Alert>
                  )}

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
