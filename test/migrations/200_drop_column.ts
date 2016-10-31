import { Migration } from "../../src/Migration";

class DropDescriptionColumn extends Migration {
  up() {
    this.alter.table("products", (t) => {
      t.drop("description");
    });
  }

  down() {

  }
}

const fixture = {
  migration: DropDescriptionColumn,
  up: [{
    _command: "alter_table",
    _name: "products",
    _columns: [
      { _command: "drop", _name: "description" }
    ]
  }],
  down: []
};

export default fixture;