import { IconProp } from "@fortawesome/fontawesome-svg-core";

import store from "../Redux/store";

import Language from "../Constants/Language";

export interface RouteInterface {
  name: string;
  title?: string;
  fullRoute: string;
  component: string;
  icon?: IconProp;
  authOnly: boolean;
  blocked: boolean;
  navBar: boolean;
}

const AppState = store.getState();
const lang = Language[AppState.state.language].nav;

const Routes: Array<RouteInterface> = [
  {
    name: "login",
    fullRoute: "/login",
    component: "Login",
    authOnly: false,
    blocked: false,
    navBar: true
  },
  {
    name: "profile",
    fullRoute: "/profile",
    component: "Profile",
    icon: "user",
    title: lang.profile,
    authOnly: false,
    blocked: false,
    navBar: true
  },
  {
    name: "chat",
    fullRoute: "/chat",
    component: "Chat",
    icon: "comment",
    title: lang.messages,
    authOnly: false,
    blocked: false,
    navBar: true
  },
  {
    name: "home",
    fullRoute: "/",
    component: "Jobs",
    icon: "suitcase",
    title: lang.jobs,
    authOnly: false,
    blocked: false,
    navBar: true
  },
  {
    name: "analytics",
    fullRoute: "/analytics",
    component: "Analytics",
    icon: "chart-bar",
    title: lang.analytics,
    authOnly: false,
    blocked: false,
    navBar: true
  },
  {
    name: "courses",
    fullRoute: "/courses",
    component: "Courses",
    icon: "desktop",
    title: lang.courses,
    authOnly: false,
    blocked: true,
    navBar: true
  },
  {
    name: "notifications",
    fullRoute: "/notifications",
    component: "Notifications",
    icon: "bell",
    title: lang.notifications,
    authOnly: false,
    blocked: false,
    navBar: true
  },
  {
    name: "settings",
    fullRoute: "/settings",
    component: "Settings",
    icon: "cog",
    title: lang.settings,
    authOnly: false,
    blocked: false,
    navBar: true
  }
];

const tempAuthOnly: Array<RouteInterface> = [];
const tempFreeRoutes: Array<RouteInterface> = [];

for (const pos in Routes) {
  if (Routes[pos].authOnly && !AppState.user.id) {
    tempAuthOnly.push(Routes[pos]);
  } else {
    tempFreeRoutes.push(Routes[pos]);
  }
}

export const authOnly = tempAuthOnly;
export const freeRoutes = tempFreeRoutes;

export default Routes;
