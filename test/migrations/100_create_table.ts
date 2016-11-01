import { Migration } from "../../src/Migration";

class CreateProducts extends Migration {
  up() {
    this.create.table("products", (t) => {
      t.id();
      t.string("name", 40).notNull();
      t.string("description", 200).notNull();
    });
  }

  down() {
    this.drop.table("products");
  }
}

const fixture = {
  migration: CreateProducts,
  up: [{
    _command: "create_table",
    _name: "products",
    _columns: [
      { _command: "add", _name: "id", _type: "integer", _notNull: true },
      { _command: "add", _name: "name", _type: "string", _length: 40, _notNull: true },
      { _command: "add", _name: "description", _type: "string", _length: 200, _notNull: true }
    ]
  }],
  down: [{
    _command: "drop_table",
    _name: "products"
  }]
};

export default fixture;