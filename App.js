import React from "react";
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Button,
  TextInput
} from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={false}
          barStyle={"light-content"}
          networkActivityIndicatorVisible={true}
        />
        <View>
          <TextInput keyboardType="number-pad" maxLength={3} />
        </View>

        <View style={styles.ic1}>
          <Blink text="Look Look Look!" />
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

class Greetings extends React.Component {
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

class Blink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(
      () =>
        this.setState(previousState => ({
          isShowingText: !previousState.isShowingText
        })),
      1000
    );
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return <Text>{this.props.text}</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#0f33fb"
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
