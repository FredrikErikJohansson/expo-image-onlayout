import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        onLayout={(event) => {
          console.log("Doesn't work on web", event);
        }}
        style={styles.image}
        source="https://picsum.photos/seed/696/3000/2000"
        contentFit="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
  },
});
