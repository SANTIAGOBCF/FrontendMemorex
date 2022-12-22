import { Profile } from "../components/Profile/Profile";
import { useSelector } from "react-redux";

export const ProfileUser = () => {
  const { token, user } = useSelector((state) => state.authSlice);
  return <Profile token={token} data={user} />;
};
