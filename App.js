/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import PayPal from "react-native-paypal-wrapper";
import BTClient from "react-native-braintree-xplat";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    const token =<your_token>
     BTClient.setup(token);
  }

  payaplPay = () => {
    PayPal.initialize(
      PayPal.NO_NETWORK,
      <client_id>
    );
    PayPal.pay({
      price: "40.70",
      currency: "MYR",
      description: "Your description goes here"
    })
      .then(confirm => alert(JSON.stringify(confirm)))
      .catch(error => alert(JSON.stringify(error)));
  };

  braintreePay = () => {
    BTClient.showPaymentViewController({
      bgColor: "#FFF",
      tintColor: "red",
      barBgColor: "green",
      barTintColor: "white"
    })
      .then(nonce => {
        //payment succeeded, pass nonce to server
        alert("Success", nonce);
      })
      .catch(err => {
        //error handling
        alert("Error", err);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome Ronald KMD!</Text>
        <TouchableOpacity onPress={() => this.payaplPay()}>
          <Text style={styles.instructions}>Pay using Paypal</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.braintreePay()}>
          <Text style={styles.instructions}>Pay using Braintree</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
