import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { URLS } from "./base/settings/urls";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { Home } from "./page/Home";
import { Login } from "./page/Login";
import { Register } from "./page/Register";
import { ProfileUser } from "./page/ProfileUser";
import { useSelector } from "react-redux";
import { Personajes } from "./page/Personajes";
import { Admin } from "./components/Admin/Admin";
import Layout from "./components/Home/Layout";
import { Profile } from "./components/Profile/Profile";
import Posts from "./page/Posts";

function App() {
  const { token, user } = useSelector((state) => state.authSlice);
  const isLogged = Boolean(token);
  const isAdmin = user?.role === "admin" ? true : false;

  return (
    <Routes>
      <Route path={URLS.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route element={<ProtectedRoute isLogged={!isLogged} />}>
          <Route path={URLS.LOGIN} element={<Login />} />
          <Route path={URLS.REGISTER} element={<Register />} />
        </Route>
        <Route
          path={URLS.PROFILE}
          element={
            <ProtectedRoute isLogged={isLogged}>
              {isAdmin ? <Admin /> : <Profile />}
            </ProtectedRoute>
          }
        />
        <Route path={URLS.PERSONAJES} element={<Personajes />} />
        <Route path={URLS.POSTS} element={<Posts />} />
        <Route path="*" element={<Navigate replace to={URLS.HOME} />} />
      </Route>
    </Routes>
  );
}

export default App;
