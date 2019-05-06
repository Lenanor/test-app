import React from "react";
import { Text, View } from "react-native";

export default class Greetings extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ color: "blue", fontWeight: "bold" }}>
          Hello, {this.props.name}!
        </Text>
      </View>
    );
  }
}
