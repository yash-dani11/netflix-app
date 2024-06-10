import { Outlet } from "react-router-dom";
import Header from "./Header";


const Body = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

export default Body;
