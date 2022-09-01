import { Routes as Switch, Route } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Fotos from "../pages/Fotos";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Sobre from "../pages/Sobre";

const Rotas = () => {
  return (
    <Switch>
      <Route index element={<Home />} />
      <Route path="fotos" element={<Fotos />} />
      <Route path="sobre" element={<Sobre />} />
      <Route path="login" element={<Login />} />
      <Route path="cadastrar" element={<Cadastro />} />
    </Switch>
  );
};
export default Rotas;
