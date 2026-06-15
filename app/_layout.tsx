import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: true }}>
        <Stack.Screen name="index" options={{ title: "Trips" }} />
        <Stack.Screen name="(auth)/login" options={{ title: "Log in" }} />
        <Stack.Screen name="(auth)/signup" options={{ title: "Sign up" }} />
        <Stack.Screen name="trip/[id]" options={{ title: "Trip" }} />
        <Stack.Screen name="booking/confirm" options={{ title: "Confirm" }} />
        <Stack.Screen name="profile" options={{ title: "Profile" }} />
      </Stack>
    </>
  );
}
