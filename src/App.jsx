import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import { URLS } from "./base/settings/urls";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { Home } from "./page/Home";
import { Login } from "./page/Login";
import { Register } from "./page/Register";
import { ProfileUser } from "./page/ProfileUser";
import { useDispatch } from "react-redux";
import { getIsLogged } from "./redux/slices/loggedSlice";
import { useEffect } from "react";
import { confimToken } from "./redux/slices/authSlice";
import { Personajes } from "./page/Personajes";

function App() {
  const isLogged = Boolean(window.sessionStorage.getItem("token"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIsLogged());
    dispatch(confimToken());
  }, [dispatch]);

  return (
    <Routes>
      <Route path={URLS.HOME} element={<Home />} />
      <Route element={<ProtectedRoute isLogged={!isLogged} />}>
        <Route path={URLS.LOGIN} element={<Login />} />
        <Route path={URLS.REGISTER} element={<Register />} />
        <Route path={URLS.COUNTER} element={<Counter />} />
        <Route path={URLS.PERSONAJES} element={<Personajes />} />
      </Route>
      <Route
        path={URLS.PROFILE}
        element={
          <ProtectedRoute isLogged={isLogged}>
            <ProfileUser />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate replace to={URLS.HOME} />} />
    </Routes>
  );
}

export default App;
