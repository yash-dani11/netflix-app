import { Provider } from "react-redux";
import store from "./redux/store";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login";
import Body from "./components/Body";
import { lazy,Suspense } from "react";
import PageLoader from "./components/PageLoader";
const Browse = lazy(()=>import("./components/Browse/Browse"));
const Player = lazy(()=>import("./components/Player"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<Body></Body>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Login></Login> },
      {
        path: "/browse",
        element: <Suspense fallback={<PageLoader></PageLoader>}><Browse></Browse></Suspense>,
      },
      {
        path:"/play/:category/:id",
        element:<Suspense fallback={<PageLoader></PageLoader>}><Player></Player></Suspense>
      }
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}>
      </RouterProvider>
    </Provider>
  );
}

export default App;
