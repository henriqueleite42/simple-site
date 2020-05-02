import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Loading from "./Loading";
import NavBar from "./NavBar";
import AuthOnlyRoutes from "../Components/AuthOnlyRoutes";
import LoginPopUp from "../Components/LoginPopUp";

import { useGlobalState } from "../Redux/reducers/state";

import { freeRoutes, authOnly } from "../Config/routes";

const loadRoute = (viewName: string, navBar: boolean): React.FC => {
  const Element = React.lazy(() => import(`./${viewName}`));

  if (navBar) {
    const ElementWithNavBar: React.FC = () => (
      <NavBar>
        <Element />
      </NavBar>
    );

    return ElementWithNavBar;
  } else {
    return Element;
  }
};

const Router: React.FC = () => {
  const GlobalState = useGlobalState();

  return (
    <Suspense fallback={<Loading />}>
      <div data-theme={GlobalState.theme}>
        <LoginPopUp />
        <BrowserRouter>
          <Switch>
            {freeRoutes.map((route, index) => (
              <Route
                exact
                key={index}
                path={route.fullRoute}
                component={loadRoute(route.component, route.navBar)}
              />
            ))}
            <AuthOnlyRoutes>
              {authOnly.map((route, index) => (
                <Route
                  key={index}
                  path={route.fullRoute}
                  component={loadRoute(route.component, route.navBar)}
                />
              ))}
            </AuthOnlyRoutes>
          </Switch>
        </BrowserRouter>
      </div>
    </Suspense>
  );
};

export default Router;
