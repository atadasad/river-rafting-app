import { View, Text, Pressable, StyleSheet } from "react-native";
import { useLocalSearchParams, Link } from "expo-router";
import { theme } from "@/constants/theme";

export default function TripDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();

  // TODO: fetch trip + available slots from Supabase using `id`.
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trip {id}</Text>
      <Text style={styles.muted}>Slot picker goes here (date + time).</Text>
      <Link href="/booking/confirm" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Select a slot</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: theme.spacing.lg, backgroundColor: theme.colors.background },
  title: { fontSize: 22, fontWeight: "700", color: theme.colors.text },
  muted: { color: theme.colors.muted, marginTop: theme.spacing.md },
  button: { backgroundColor: theme.colors.primary, padding: 14, borderRadius: 8, marginTop: theme.spacing.lg },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "600" },
});
