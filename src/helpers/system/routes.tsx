import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { ROUTES } from "./constants-variables";

// Components to Routes
import HomePage from "@/pages/Home";
import SignInPage from "@/pages/SignIn";
import DragonsPage from "@/pages/Dragons";

export const Routes: React.FC = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path={ROUTES.HOME()} component={HomePage} />
      <Route exact path={ROUTES.DRAGONS()} component={DragonsPage} />
      <Route exact path={ROUTES.SIGN_IN()} component={SignInPage} />
      <Route exact path={ROUTES.NOT_FOUND()} component={HomePage} />
      <Route exact path={ROUTES.ERROR()} component={HomePage} />
      <Route path={ROUTES.ALL()} component={HomePage} />
    </Switch>
  </BrowserRouter>
);