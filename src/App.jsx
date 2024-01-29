import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Landing,
  About,
  HomeLayout,
  Error,
  Newsletter,
  Cocktail,
  SingleErrorPage,
} from "./pages/index";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singeleCocktailLoader } from "./pages/Cocktail";
import { action as newsLetterAction } from "./pages/Newsletter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SingleErrorPage />,
        loader: landingLoader,
      },
      {
        path: "/cocktail/:id",
        errorElement: <SingleErrorPage />,
        loader: singeleCocktailLoader,
        element: <Cocktail />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
        action: newsLetterAction,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
