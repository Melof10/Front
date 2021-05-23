// Layout
import LayoutAdmin from "../layouts/LayoutAdmin";
// Admin Pages
import Main from '../components/backoffice/posts';
// Login
import Login from '../pages/authentication/login';
// Other
import NotFound from "../pages/NotFound";

const routes = [
  {
    path: "/",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/home",
        component: Main,
        exact: true
      },
      {
        path: "/login",
        component: Login,
        exact: true
      },
      {
        component: NotFound
      }
    ]
  }
];

export default routes;
