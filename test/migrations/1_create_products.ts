import { Migration } from "../../src/Migration";

export class CreateProducts extends Migration {
  up() {
    this.create.table("products", (t) => {
      t.id();
      t.string("name").notNull();
    });
  }
}