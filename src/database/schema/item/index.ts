import { pgTable, uuid, text } from "drizzle-orm/pg-core";
import { baseSchema } from "../base";
import { relations } from "drizzle-orm";
import { orderItems } from "../orderitems";

export const items = pgTable('items', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  price: text('price').notNull(),
  digitalFile: text('digital_file').notNull(),
  ...baseSchema
})

export const itemRelations = relations(items, ({ one }) => ({
  orderItems: one(orderItems, {
    fields: [items.id],
    references: [orderItems.itemId]
  })
}))
