import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductList, ViewProduct } from "../app/index";    

const NotFound = () => {
  return <h1>Not Found</h1>;
};

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={ProductList} />
      <Route path="/product" exact component={ProductList} />
      <Route path="/product/:id" exact component={ViewProduct} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
