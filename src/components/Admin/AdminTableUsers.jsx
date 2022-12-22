import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllUsers } from "../../https/adminRequest";
import { data as utils } from "../../utils/data";
import TRowUsers from "./TRowUsers";

const AdminTableUsers = () => {
  const { token } = useSelector((state) => state.authSlice);
  const [data, setData] = useState(utils);

  // useEffect(() => {
  //   getAllUsers(token)
  //     .then((res) => setData(res))
  //     .catch((e) => console.log(e));
  // }, [data]);

  return (
    <>
      <h1>Solicitudes para admin</h1>
      <Table className="table-hover pointer">
        <thead>
          <tr>
            <th>Username</th>
            <th>Roles</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((datos) => datos.role !== "admin")
            .map((datos) => (
              <TRowUsers key={datos.id} data={datos} />
            ))}
          {/* {data.map((datos) => {
            if (datos.role !== "admin")
              return <TRow key={datos.id} data={datos} />;
          })} */}
        </tbody>
      </Table>
    </>
  );
};

export default AdminTableUsers;
