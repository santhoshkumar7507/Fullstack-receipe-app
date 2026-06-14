import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { COLORS } from "../constants/colors";
import { recipeCardStyles } from "../assets/styles/home.styles";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

export default function RecipeCard({ recipe }) {
  const router = useRouter();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.95);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  return (
    <AnimatedTouchableOpacity
      style={[recipeCardStyles.container, animatedStyle]}
      onPress={() => router.push(`/recipe/${recipe.id}`)}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={0.9}
    >
      <View style={recipeCardStyles.imageContainer}>
        <Image
          source={{ uri: recipe.image }}
          style={recipeCardStyles.image}
          contentFit="cover"
          transition={300}
        />
      </View>

      <View style={recipeCardStyles.content}>
        <Text style={recipeCardStyles.title} numberOfLines={2}>
          {recipe.title}
        </Text>
        {recipe.description && (
          <Text style={recipeCardStyles.description} numberOfLines={2}>
            {recipe.description}
          </Text>
        )}

        <View style={recipeCardStyles.footer}>
          {recipe.cookTime && (
            <View style={recipeCardStyles.timeContainer}>
              <Ionicons name="time-outline" size={14} color={COLORS.primary} />
              <Text style={recipeCardStyles.timeText}>{recipe.cookTime}</Text>
            </View>
          )}
          {recipe.servings && (
            <View style={recipeCardStyles.servingsContainer}>
              <Ionicons name="people-outline" size={14} color={COLORS.primary} />
              <Text style={recipeCardStyles.servingsText}>{recipe.servings}</Text>
            </View>
          )}
        </View>
      </View>
    </AnimatedTouchableOpacity>
  );
}
