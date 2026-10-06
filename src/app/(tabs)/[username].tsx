import { StyleSheet, Text, View } from "react-native";

export default function Username() {
  return (
    <View style={styles.container}>
      <Text>Edit src/app/[username].tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
