import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { theme } from "@/constants/theme";

// Placeholder trips. Will be replaced by a query to Supabase `trips`.
const PLACEHOLDER_TRIPS = [
  { id: "1", name: "Lower Canyon Run", difficulty: "Grade II" },
  { id: "2", name: "Rapids Adventure", difficulty: "Grade III" },
];

export default function TripList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={PLACEHOLDER_TRIPS}
        keyExtractor={(t) => t.id}
        renderItem={({ item }) => (
          <Link href={`/trip/${item.id}`} asChild>
            <Pressable style={styles.card}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.muted}>{item.difficulty}</Text>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background, padding: theme.spacing.md },
  card: { padding: theme.spacing.md, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 12, marginBottom: theme.spacing.md },
  title: { fontSize: 18, fontWeight: "600", color: theme.colors.text },
  muted: { color: theme.colors.muted, marginTop: 4 },
});
