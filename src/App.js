import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import Form from "./pages/Form/Form";
import ViewData from "./pages/ViewData/ViewData";
//import Login from "./pages/Login/Login";
import Login from "./pages/Login/Login";
import "./styles.css";
import Register from "./pages/Register/Register";
//import LoginBanner from "./components/authentication/LoginBanner";

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/view-data" element={<ViewData />} />
          <Route path="/form" element={<Form />} />
          <Route path="/" element={<></>} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
