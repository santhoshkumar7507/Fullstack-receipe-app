import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants/colors";

const { width } = Dimensions.get("window");
const cardWidth = (width - 48) / 2;

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingBottom: 100, // extra padding for floating tab bar
  },
  welcomeSection: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  welcomeText: {
    fontSize: 34,
    fontWeight: "900",
    color: COLORS.text,
    letterSpacing: -1,
  },
  featuredSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  featuredCard: {
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: COLORS.card,
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 15,
  },
  featuredImageContainer: {
    height: 300,
    backgroundColor: COLORS.primary,
    position: "relative",
  },
  featuredImage: {
    width: "100%",
    height: "100%",
  },
  featuredOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "space-between",
    padding: 24,
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  featuredBadge: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
    overflow: "hidden",
  },
  featuredBadgeText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  featuredContent: {
    justifyContent: "flex-end",
  },
  featuredTitle: {
    fontSize: 28,
    fontWeight: "900",
    color: COLORS.white,
    marginBottom: 12,
    lineHeight: 34,
    textShadowColor: "rgba(0,0,0,0.5)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 8,
  },
  featuredMeta: {
    flexDirection: "row",
    gap: 16,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },
  metaText: {
    fontSize: 13,
    color: COLORS.white,
    fontWeight: "700",
  },
  recipesSection: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  sectionHeader: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: COLORS.text,
    letterSpacing: -0.5,
  },
  recipesGrid: {
    gap: 16,
  },
  row: {
    justifyContent: "space-between",
    gap: 16,
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 64,
    paddingHorizontal: 32,
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: COLORS.text,
    marginTop: 20,
    marginBottom: 8,
  },
  emptyDescription: {
    fontSize: 15,
    color: COLORS.textLight,
    textAlign: "center",
  },
  categoryFilterContainer: {
    marginVertical: 16,
  },
  categoryFilterScrollContent: {
    paddingHorizontal: 20,
    gap: 12,
  },
  categoryButton: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.card,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: COLORS.border,
    minWidth: 85,
  },
  selectedCategory: {
    backgroundColor: COLORS.glassActive,
    borderColor: COLORS.primary,
  },
  categoryImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginBottom: 8,
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  selectedCategoryImage: {
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  categoryText: {
    fontSize: 13,
    fontWeight: "700",
    color: COLORS.textLight,
    textAlign: "center",
  },
  selectedCategoryText: {
    color: COLORS.white,
  },
});

export const recipeCardStyles = StyleSheet.create({
  container: {
    width: cardWidth,
    backgroundColor: COLORS.card,
    borderRadius: 24,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: "hidden",
  },
  imageContainer: {
    position: "relative",
    height: 160,
  },
  image: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.border,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "800",
    color: COLORS.text,
    marginBottom: 6,
    lineHeight: 22,
  },
  description: {
    fontSize: 13,
    color: COLORS.textLight,
    marginBottom: 12,
    lineHeight: 18,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.05)",
    paddingTop: 12,
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeText: {
    fontSize: 12,
    color: COLORS.textLight,
    marginLeft: 6,
    fontWeight: "600",
  },
  servingsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  servingsText: {
    fontSize: 12,
    color: COLORS.textLight,
    marginLeft: 6,
    fontWeight: "600",
  },
});
