import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { supabase } from "@/lib/supabase";
import { theme } from "@/constants/theme";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signIn() {
    // TODO: handle errors / loading state
    await supabase.auth.signInWithPassword({ email, password });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} autoCapitalize="none" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} secureTextEntry value={password} onChangeText={setPassword} />
      <Pressable style={styles.button} onPress={signIn}>
        <Text style={styles.buttonText}>Log in</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: theme.spacing.lg, backgroundColor: theme.colors.background },
  label: { color: theme.colors.muted, marginTop: theme.spacing.md, marginBottom: 4 },
  input: { borderWidth: 1, borderColor: theme.colors.border, borderRadius: 8, padding: 12 },
  button: { backgroundColor: theme.colors.primary, padding: 14, borderRadius: 8, marginTop: theme.spacing.lg },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "600" },
});
