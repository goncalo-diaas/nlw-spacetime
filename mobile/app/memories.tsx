import { TouchableOpacity, View, ScrollView, Image, Text } from "react-native";
import Icon from "@expo/vector-icons/Feather";
import * as SecureStore from "expo-secure-store";

import NLWLogo from "../src/assets/nlw-spacetime-logo.svg";
import { Link, useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function NewMemory() {
  const { bottom, top } = useSafeAreaInsets();
  const router = useRouter();

  async function signOut() {
    await SecureStore.deleteItemAsync("token");

    router.push("/");
  }

  return (
    <ScrollView
      className="flex-1 px-8"
      contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}
    >
      <View className="flex-row items-center mt-4 justify-between">
        <NLWLogo />
        <View className="flex-row gap-2">
          <TouchableOpacity
            onPress={signOut}
            className="h-10 w-10 items-center justify-center rounded-full bg-red-500"
          >
            <Icon name="log-out" size={16} color="#FFF" />
          </TouchableOpacity>
          <Link href="/new" asChild>
            <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-green-500">
              <Icon name="plus" size={16} color="#FFF" />
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      <View className="mt-6 space-y-10">
        <View className="space-y-4">
          <Text>12 de Abril, 2023</Text>
          <View className="space-y-4 px-8">
            <Image
              source={{
                uri: "http://192.168.1.131:3333/uploads/c73ceb6c-f133-4ba9-b4af-3b817dacbff6.png",
              }}
              className="aspect-video w-full rounded-lg"
              alt=""
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
