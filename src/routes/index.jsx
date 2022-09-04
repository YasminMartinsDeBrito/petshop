import { Routes as Switch, Route } from "react-router-dom";
import { Cadastro, Home, Fotos, Sobre, Login } from "../pages";

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
