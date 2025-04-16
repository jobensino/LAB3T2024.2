import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const DATABASE_NAME = "lab3.db";
export const TABLENAME_USER = "user";

export const usersTable = sqliteTable(TABLENAME_USER, {
    id: text().primaryKey(),
    name: text().notNull(),
    email: text().notNull().unique(),
});