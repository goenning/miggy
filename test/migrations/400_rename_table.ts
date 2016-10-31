import { Migration } from "../../src/Migration";

class RenameTable1 extends Migration {
  up() {
    this.rename.table("table1", "table3");
  }

  down() {
    this.reverse();
  }
}

const fixture = {
  migration: RenameTable1,
  up: [{
    _command: "rename_table",
    _name: "table1",
    _newName: "table3"
  }],
  down: [{
    _command: "rename_table",
    _name: "table3",
    _newName: "table1"
  }]
};

export default fixture;