import React from "react";
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Button,
  TextInput,
  Image
} from "react-native";

import Greetings from "./components/Greetings";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={false}
          barStyle={"dark-content"}
          networkActivityIndicatorVisible={true}
        />
        <View style={styles.icon}>
          <Image
            source={require("./assets/icon_test.png")}
            style={{ width: 50, height: 50 }}
          />
        </View>

        <View style={{ padding: 10 }}>
          <TextInput
            style={{ height: 40 }}
            placeholder="Type here to translate!"
          />
          <Text style={{ padding: 10, fontSize: 42 }}>
            {this.state.text
              .split(" ")
              .map(word => word && "🍕")
              .join(" ")}
          </Text>
        </View>
        <View style={styles.icRow}>
          <View style={styles.ic2}>
            <Text>Text 2</Text>
            <Text>En liten text om ingenting</Text>
          </View>
          <View style={styles.ic3}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Text 3</Text>
          </View>
        </View>
        <View style={styles.ic4}>
          <Text style={{ fontWeight: "bold" }}>Text 4</Text>
        </View>
        <View style={styles.ic1}>
          <Greetings name="Banana" />
          <Greetings name="Grape" />
          <Greetings name="Cherry" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#fff"
  },
  icon: {
    backgroundColor: "#eee",
    padding: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  ic1: {
    backgroundColor: "#eee",
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  ic2: {
    backgroundColor: "#fff",
    padding: 20
  },
  ic3: {
    backgroundColor: "#000",
    padding: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  ic4: {
    backgroundColor: "#AAA",
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  icRow: {
    flexDirection: "row",
    padding: 20,
    flex: 1
  }
});
