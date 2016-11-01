import { PgDialect } from "../../src/dialects/PgDialect";
import { CreateTableExpression } from "../../src/expressions/CreateExpressionRoot";
import { AddColumnExpression, AddStringColumnExpression } from "../../src/expressions/ColumnExpression";
import { expect } from "chai";

describe("PgDialect", () => {
  it("simple", () => {
    const expression = new CreateTableExpression("people", [
      new AddColumnExpression("id", "integer"),
      new AddStringColumnExpression("name", 50),
    ]);
    const sql = expression.toSql(new PgDialect());
    expect(sql).to.deep.eq([
      "CREATE TABLE people (id integer, name character varying(50))"
    ]);
  });
});