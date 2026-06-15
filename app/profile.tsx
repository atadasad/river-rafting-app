import { View, Text, Pressable, StyleSheet } from "react-native";
import { supabase } from "@/lib/supabase";
import { theme } from "@/constants/theme";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your profile</Text>
      <Text style={styles.muted}>Name, phone and your bookings will appear here.</Text>
      <Pressable style={styles.button} onPress={() => supabase.auth.signOut()}>
        <Text style={styles.buttonText}>Log out</Text>
      </Pressable>
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
