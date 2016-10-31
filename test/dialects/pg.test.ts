import { PgDialect } from "../../src/dialects/PgDialect";
import { CreateTableExpression } from "../../src/expressions/CreateExpressionRoot";
import { AddColumnExpression } from "../../src/expressions/ColumnExpression";
import { expect } from "chai";
const one = require("../migrations/100_create_table");

describe("PgDialect", () => {
  it("simple", () => {
    const expression = new CreateTableExpression("people", [
      new AddColumnExpression("id", "integer"),
      new AddColumnExpression("name", "string"),
    ]);
    const sql = expression.toSql(new PgDialect());
    expect(sql).to.deep.eq([
      "CREATE TABLE people (id integer, name string)"
    ]);
  });
});