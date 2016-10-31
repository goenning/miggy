import { MigrationContext } from "../MigrationContext";
import { Expression } from "./Expression";
import { ColumnExpressionRoot } from "./ColumnExpressionRoot";

export class DropTableExpression extends Expression {
  public _command: string;
  public _name: string;

  constructor(tableName: string) {
    super();
    this._command = "drop_table";
    this._name = tableName;
  }
}

export class DropExpressionRoot {
  constructor(private context: MigrationContext) {

  }

  public table(tableName: string) {
    const expression = new DropTableExpression(tableName);
    this.context.add(expression);
    return expression;
  }
}