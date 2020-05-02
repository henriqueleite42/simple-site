import React from "react";
import { useHistory } from "react-router-dom";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useUserState } from "../../Redux/reducers/user";

import Visibility from "../../Functions/Visibility";

import Routes, { RouteInterface } from "../../Config/routes";

import Logo from "../../Assets/images/logo.svg";

import style from "./style.module.scss";

interface NavItem {
  name: string;
  icon: IconProp;
  title: string;
  redirect?: string;
  blocked?: boolean;
}

const NavBar: React.FC = ({ children }) => {
  const history = useHistory();
  const userState = useUserState();
  const VisibilityControls = new Visibility("login-popup");

  const checkAuth = (route: Partial<RouteInterface>) => {
    if (route.blocked) return false;

    if (route.authOnly && !userState.id) return VisibilityControls.show();

    history.push(route.fullRoute as string);
  };

  return (
    <div className={style["container"]}>
      <nav className={style["nav"]}>
        <ul className={style["ul"]}>
          <li
            title="NOME_EMPRESA"
            className={style["logo"]}
            onClick={() => checkAuth({ authOnly: false, fullRoute: "/" })}
          >
            <img src={Logo} alt="NOME_EMPRESA" />
          </li>
          {Routes.map((route, index) => {
            if (!route.navBar || !route.icon) return;

            return (
              <li
                key={index}
                title={route.title}
                className={`
                  ${style["icon"]}
                  ${
                    history.location.pathname === route.fullRoute
                      ? style["active"]
                      : ""
                  }
                  ${route.blocked ? style["blocked"] : ""}
                `}
                onClick={() => checkAuth(route)}
              >
                <FontAwesomeIcon icon={route.icon as IconProp} />
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={style["right"]}>{children}</div>
    </div>
  );
};

export default NavBar;
