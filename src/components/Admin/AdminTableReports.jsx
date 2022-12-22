import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllUsers } from "../../https/adminRequest";
import report from "../../utils/reports";
import TRowReports from "./TRowReports";

const AdminTableReports = () => {
  const { token } = useSelector((state) => state.authSlice);
  const [dataReport, setDataReport] = useState(report);

  // useEffect(() => {
  //   getAllUsers(token)
  //     .then((res) => setData(res))
  //     .catch((e) => console.log(e));
  // }, [data]);

  return (
    <>
      <h1>Posts Reportados</h1>
      <Table className="table-hover pointer">
        <thead>
          <tr>
            <th>Personaje</th>
            <th>Tipo Reporte</th>
            <th>Ver Post</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {dataReport.map((datos) => (
            <TRowReports key={datos.id} dataReport={datos} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default AdminTableReports;
