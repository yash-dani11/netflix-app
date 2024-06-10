import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Body from "./components/Body";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<Body></Body>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Login></Login> },
      {
        path: "/browse",
        element: <Browse></Browse>,
      },
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
