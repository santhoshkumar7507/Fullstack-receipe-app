import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { BlurView } from "expo-blur";
import { View, StyleSheet } from "react-native";

const TabsLayout = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return null;

  if (!isSignedIn) return <Redirect href={"/(auth)/sign-in"} />;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textLight,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 24,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "transparent",
          borderRadius: 30,
          height: 60,
          borderWidth: 0,
          borderTopWidth: 0, // remove default top border
          paddingBottom: 0,
        },
        tabBarBackground: () => (
          <View style={styles.blurContainer}>
            <BlurView tint="dark" intensity={80} style={StyleSheet.absoluteFill} />
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Recipes",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "restaurant" : "restaurant-outline"} size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "search" : "search-outline"} size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "heart" : "heart-outline"} size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  blurContainer: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 30,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.15)",
  },
});

export default TabsLayout;
