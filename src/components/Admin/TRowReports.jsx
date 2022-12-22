import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { patchDataUser } from "../../https/adminRequest";
import { ModalPosts } from "../ModalPost/ModalPosts";
import posts from "../../utils/posts";

const TRowReports = ({ dataReport }) => {
  const [datos, setDatos] = useState(dataReport);
  const { token } = useSelector((state) => state.authSlice);
  const [postReport, setPostReport] = useState(
    posts.filter((post) => post.id === dataReport.postId)
  );
  const dispatch = useDispatch();

  console.log(postReport);

  const handleOmitir = () => {
    // elimina post de la tabla reportes
    console.log("eliminado de tabla reports");
  };

  const handleDeletePost = () => {
    // elimina post de la tabla post
    console.log("eliminado en tabla post");
  };

  return (
    <tr>
      <td className="text-center">{postReport[0].title}</td>
      <td className="text-center">{datos.report}</td>
      <td className="text-center">
        <ModalPosts datos={postReport[0]} />
      </td>
      <td className="text-center">
        <Button onClick={handleOmitir} className="btn btn-dark">
          Omitir
        </Button>{" "}
        <Button onClick={handleDeletePost} variant="danger">
          Eliminar Post
        </Button>
      </td>
    </tr>
  );
};

export default TRowReports;
