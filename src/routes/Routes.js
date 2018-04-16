import React, { Element } from "react";
import { Scene, Router, Modal, Reducer } from "react-native-router-flux";
import { StatusBar } from "react-native";
import LoginContainer from "../containers/LoginContainer";
import SignupContainer from "../containers/SignupContainer";


class Routes extends React.Component {

  render(): Element<*> {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="login"
            hideNavBar
            initial
            component={LoginContainer}
          />
           <Scene
            key="signup"
            hideNavBar
            component={SignupContainer}
          />
        </Scene>
      </Router>
    );
  }
}
export default Routes;
