import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { patchDataUser } from "../../https/adminRequest";
import { newRole } from "../../redux/slices/authSlice";
import { ModalReport } from "../ModalReport/ModalReport";

const TRowUsers = ({ data }) => {
  const [datos, setDatos] = useState(data);
  const [optiones, setOptiones] = useState("");
  const { token } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();

  const handleAcept = () => {
    if (optiones) {
      patchDataUser(token)
        .then()
        .catch((e) => console.log(e));
      dispatch(newRole(optiones));
    }
    console.log("error al enviar");
  };

  const handleChange = (e) => {
    setOptiones({ role: e.target.value });
  };

  const HandleOption = () => {
    return (
      <select style={{ marginRight: "10px" }} onChange={handleChange}>
        <option>Options</option>
        <option value="admin">Admin</option>
        <option value="moderador">Moderador</option>
      </select>
    );
  };

  return (
    <tr>
      <td className="text-center">{datos.email}</td>
      <td className="text-center">
        <HandleOption />
      </td>
      <td className="text-center">
        <Button onClick={handleAcept} className="btn btn-dark">
          Modificar
        </Button>{" "}
        <Button variant="danger">Denegar</Button>
      </td>
    </tr>
  );
};

export default TRowUsers;
