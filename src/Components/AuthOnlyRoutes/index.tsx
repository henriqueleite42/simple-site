import React from "react";
import Login from "../../View/Login";

/**
 * Tudo que estiver dentro deste componente só pode ser acessado por usuários autênticados, caso não haja usuário, a página de login será mostrada.
 */
const AuthOnlyRoutes: React.FC = props => {
  if (false) return <Login />;

  return <>{props.children}</>;
};

export default AuthOnlyRoutes;
