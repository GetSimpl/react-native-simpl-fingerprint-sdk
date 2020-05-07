import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useSimplFingerprint } from "./useSimplFingerprint";

export default function App() {
  const fingerPrintData = useSimplFingerprint();
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Simpl Fingerprint Demo</Text>
      <Button
        title={`${!show ? "Show" : "Hide"} fingerprint`}
        onPress={() => setShow(!show)}
      />
      {show && <Text style={styles.text}>{fingerPrintData}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  fptext: {
    fontSize: 14,
    textAlign: "center",
    margin: 10,
  },
  button: {
    margin: 10,
  },
});
