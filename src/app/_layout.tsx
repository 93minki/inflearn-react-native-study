import { Stack } from "expo-router";

// NOTE
/**
 * 전체 레이아웃(Root Layout)에서는 View 관련된 작업보다
 * 구글 애널리틱스, Auth, 초기화 작업들을 실행한다.
 */

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
  );
}
