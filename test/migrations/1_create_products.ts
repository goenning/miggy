import { Schema } from "../../src/";

export function up(schema: Schema) {
  return schema.createTable("products", (t) => {
    t.id();
    t.string("name");
  });
}