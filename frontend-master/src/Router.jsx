import React from "react";
import { Route, Switch } from "react-router";
import Favourites from "./containers/Favourites";
import Home from "./containers/Home";
import Places from "./containers/Places";
import DetailPage from "./containers/DetailPage";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/favourites/"} component={Favourites} />
        <Route exact path={"/places/"} component={Places} />
        <Route exact path={"/detail-page/"} component={DetailPage} />
      </Switch>
    </>
  );
};
export default Router;
