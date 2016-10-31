import { Migration } from "../../src/Migration";

class CreateTwoTables extends Migration {
  up() {
    this.create.table("table1", (t) => {
      t.id();
    });

    this.create.table("table2", (t) => {
      t.id();
    });
  }

  down() {
    this.reverse();
  }
}

const fixture = {
  migration: CreateTwoTables,
  up: [{
    _command: "create_table",
    _name: "table1",
    _columns: [
      { _command: "add", _name: "id", _type: "integer", _notNull: true }
    ]
  }, {
    _command: "create_table",
    _name: "table2",
    _columns: [
      { _command: "add", _name: "id", _type: "integer", _notNull: true }
    ]
  }],
  down: [{
    _command: "drop_table",
    _name: "table1"
  }, {
    _command: "drop_table",
    _name: "table2"
  }]
};

export default fixture;