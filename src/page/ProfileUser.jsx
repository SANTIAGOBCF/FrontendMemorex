import { Profile } from "../components/Profile/Profile";
import { useSelector } from "react-redux";

export const ProfileUser = () => {
  const { token } = useSelector((state) => state.authSlice);
  const { data } = useSelector((state) => state.editDataSlice);
  return <Profile token={token} data={data} />;
};
