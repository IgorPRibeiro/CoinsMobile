import React from "react";
import { Stack } from "expo-router/stack";
import { RootSiblingParent } from "react-native-root-siblings";

export default function Layout() {
  return (
    <RootSiblingParent>
      <Stack initialRouteName="index">
        <Stack.Screen name="index" options={{ headerShown: false }} />

        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </RootSiblingParent>
  );
}
