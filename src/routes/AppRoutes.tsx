import { App } from "../App.tsx";
import { createBrowserRouter} from "react-router-dom";

//Pages
import { Home } from "./Home";
import { Feed } from './Feed.tsx';
export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        
        path: "/feed",
        element: <Feed />,
      }
    ]
  }
])
