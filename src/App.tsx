import GlobalStyles from "./styles/GlobalStyles";
import { Outlet } from "react-router-dom";
export function App() {

  return (
    <>
    <GlobalStyles />
    <Outlet />
    </>
  )
}