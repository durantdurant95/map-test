import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { StyleSheet } from "react-native";

export default function MapComponent() {
  return (
    <ThemedView style={styles.placeholderMap}>
      <ThemedText>
        Maps are only available on iOS and Android devices
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  placeholderMap: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    color: "#666",
    borderRadius: 8,
  },
});
