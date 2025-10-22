import { PATHS } from "../constants/index";
import About from "../pages/about";
import Home from "../pages/home";

const routes = [
  {
    path: PATHS.HOME,
    page: Home,
  },
  {
    path: PATHS.ABOUT,
    page: About,
  },
];

export { routes };
