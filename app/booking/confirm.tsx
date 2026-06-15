import { View, Text, StyleSheet } from "react-native";
import { theme } from "@/constants/theme";

export default function ConfirmBooking() {
  // TODO: create a booking row (status = "reserved"). No payment in MVP.
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Booking reserved</Text>
      <Text style={styles.muted}>Pay on arrival. Online payment comes in a later phase.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: theme.spacing.lg, alignItems: "center", justifyContent: "center", backgroundColor: theme.colors.background },
  title: { fontSize: 22, fontWeight: "700", color: theme.colors.primary },
  muted: { color: theme.colors.muted, marginTop: theme.spacing.md, textAlign: "center" },
});
