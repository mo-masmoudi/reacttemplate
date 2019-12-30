import React from "react";
import { Switch, Route } from "react-router-dom";

import HelloWorldComponent from "../components/HelloWorldComponent";
import HelloWorldContainer from "../containers/HelloWorldContainer";

import OtherPageComponent from "../components/OtherPageComponent";
import OtherPageContainer from "../containers/OtherPageContainer";

import Error from "../components/Error";

const Index = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => (
        <HelloWorldContainer {...props} Layout={HelloWorldComponent} />
      )}
    />
    <Route
      exact
      path="/other"
      render={props => (
        <OtherPageContainer {...props} Layout={OtherPageComponent} />
      )}
    />
    <Route
      render={props => (
        <Error
          {...props}
          title="404"
          content="Sorry, the route you requested does not exist"
        />
      )}
    />
  </Switch>
);

export default Index;
