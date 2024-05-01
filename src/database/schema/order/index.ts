import { pgTable, uuid, text } from "drizzle-orm/pg-core";
import { baseSchema } from "../base";
import { relations } from "drizzle-orm";
import { orderItems } from "../orderitems";

export const orders = pgTable('orders', {
  id: uuid('id').defaultRandom().primaryKey(),
  status: text('description').notNull(),
  digitalFile: text('digital_file').notNull(),
  price: text('price').notNull(),
  ...baseSchema
})

export const orderRelations = relations(orders, ({ one }) => ({
  orderItems: one(orderItems, {
    fields: [orders.id],
    references: [orderItems.orderId]
  })
}))
