import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"

export const channels = pgTable("channels", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull().unique(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
})

export type Channel = typeof channels.$inferSelect
export type InsertChannel = typeof channels.$inferInsert 