import { Migration } from "../../src/Migration";

class CreateProducts extends Migration {
  up() {
    this.create.table("products", (t) => {
      t.id();
      t.string("name").notNull();
    });
  }
}

const fixture = {
  migration: CreateProducts,
  expect: [{
    _command: "create_table",
    _name: "products",
    _columns: [
      { _name: "id", _type: "integer", _notNull: true },
      { _name: "name", _type: "string", _notNull: true }
    ]
  }]
};

export default fixture;