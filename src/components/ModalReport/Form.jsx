import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const FormEdit = ({ isDisabled, disabledForm }) => {
  const [user, setUser] = useState({ name: "n1", password: "p1" });
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      name: "nombre1",
      // password: "password1",
    },
    // defaultValues: { ...user },
  });

  useEffect(() => {
    const rF = refForm.current;
    if (isDisabled) {
      rF.removeAttribute("disabled");
    } else {
      rF.setAttribute("disabled", "disabled");
    }
  }, [isDisabled]);

  const refForm = useRef();

  const onSubmit = (values) => {
    console.log(values);
    reset({
      password: "",
    });
    disabledForm();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <fieldset disabled ref={refForm}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            {...register("name", {
              required: { value: true, message: "nombre requerido" },
            })}
          />
        </Form.Group>
        {errors.name && (
          <Alert key="danger" variant="danger">
            {errors.name.message}
          </Alert>
        )}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("email", {
              required: { value: true, message: "email requerido" },
            })}
          />
        </Form.Group>
        {errors.name && (
          <Alert key="danger" variant="danger">
            {errors.email.message}
          </Alert>
        )}

        {isDisabled && (
          <>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
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
            </Form.Group>
            {errors.password && (
              <Alert key="danger" variant="danger">
                {errors.password.message}
              </Alert>
            )}
            <Button variant="primary" type="submit">
              Guardar
            </Button>
            <Button variant="danger" type="button" onClick={disabledForm}>
              Cancel
            </Button>
          </>
        )}
      </fieldset>
    </Form>
  );
};
