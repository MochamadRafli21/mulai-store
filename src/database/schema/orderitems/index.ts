import { pgTable, uuid, text } from "drizzle-orm/pg-core";
import { baseSchema } from "../base";
import { relations } from "drizzle-orm";
import { items } from "../item";
import { orders } from "../order";

export const orderItems = pgTable('order_items', {
  id: uuid('id').defaultRandom().primaryKey(),
  orderId: uuid('order_id').notNull(),
  itemId: uuid('item_id').notNull(),
  price: text('price').notNull(),
  ...baseSchema
})

export const orderItemsRelations = relations(orderItems, ({ one }) => ({
  order: one(orders, {
    fields: [orderItems.orderId],
    references: [orders.id]
  }),
  item: one(items, {
    fields: [orderItems.itemId],
    references: [items.id]
  })
}))

