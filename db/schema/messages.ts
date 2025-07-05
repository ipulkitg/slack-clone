import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"
import { channels } from "./channels"

export const messages = pgTable("messages", {
  id: uuid("id").primaryKey().defaultRandom(),
  channelId: uuid("channel_id")
    .references(() => channels.id, { onDelete: "cascade" })
    .notNull(),
  username: text("username").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
})

export type Message = typeof messages.$inferSelect
export type InsertMessage = typeof messages.$inferInsert 