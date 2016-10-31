import { AutoReversingMigration } from "../../src/AutoReversingMigration";

class AddProductPrice extends AutoReversingMigration {
  up() {
    this.alter.table("products", (t) => {
      t.decimal("price").precision(5).scale(2);
    });
  }
}

const fixture = {
  migration: AddProductPrice,
  up: [{
    _command: "alter_table",
    _name: "products",
    _columns: [
      { _command: "add", _name: "price", _type: "decimal", _precision: 5, _scale: 2, _notNull: false }
    ]
  }],
  down: [{
    _command: "alter_table",
    _name: "products",
    _columns: [
      { _command: "drop", _name: "price" }
    ]
  }]
};

export default fixture;