import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Platform, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.header}>
        Map with User Location
      </ThemedText>
      <MapComponent />
    </ThemedView>
  );
}

const MapComponent = Platform.select({
  native: () => require("@/components/MapComponent.native").default,
  default: () => require("@/components/MapComponent.web").default,
})();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  header: {
    textAlign: "center",
  },
});
