import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const favoritesTable = sqliteTable("favorites", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: text("user_id").notNull(),
  recipeId: integer("recipe_id").notNull(),
  title: text("title").notNull(),
  image: text("image"),
  cookTime: text("cook_time"),
  servings: text("servings"),
  createdAt: integer("created_at", { mode: 'timestamp' }),
});
