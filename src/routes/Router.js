import { Route } from "react-router-dom";
import Home from "../user/home/Home";

const Router = () => {
  return (
    <>
      <Route path={"/"} component={Home} exact />
    </>
  );
};
export default Router;
