// Layout
import LayoutAdmin from "../layouts/LayoutAdmin";
// Admin Pages
import Main from '../components/backoffice/dashboard';
// Login
import Login from '../pages/authentication/login';
// Other
import NotFound from "../pages/NotFound";
import ViewPost from "../components/backoffice/posts/ViewPost";
import ViewPhoto from "../components/backoffice/photos/ViewPhoto";

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
        path: "/post/:id",
        component: ViewPost,
        exact: true
      },
      {
        path: "/photo/:id",
        component: ViewPhoto,
        exact: true
      },
      {
        path: "",
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
