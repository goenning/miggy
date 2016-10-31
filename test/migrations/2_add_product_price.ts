import { Migration } from "../../src/Migration";

class AddProductPrice extends Migration {
  up() {
    this.alter.table("products", (t) => {
      t.decimal("price").precision(5).scale(2);
    });
  }
}

const fixture = {
  migration: AddProductPrice,
  expect: [{
    _command: "alter_table",
    _name: "products",
    _columns: [
      { _name: "price", _type: "decimal", _precision: 5, _scale: 2, _notNull: false }
    ]
  }]
};

export default fixture;