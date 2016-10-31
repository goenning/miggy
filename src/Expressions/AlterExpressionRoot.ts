import { MigrationContext } from "../MigrationContext";
import { Expression } from "./Expression";
import { ColumnExpressionRoot } from "./ColumnExpressionRoot";
import { ColumnExpression } from "./ColumnExpression";

export type AlterTableOptions = (columns: ColumnExpressionRoot) => void;

export class AlterTableExpression extends Expression {
  public _command: string;
  public _name: string;
  public _columns: ColumnExpression[];

  constructor(tableName: string, options: AlterTableOptions) {
    super();
    this._command = "alter_table";
    this._name = tableName;
    this._columns = [];
    options(new ColumnExpressionRoot(this._columns));
  }
}

export class AlterExpressionRoot {
  constructor(private context: MigrationContext) {

  }

  public table(tableName: string, options: AlterTableOptions) {
    const expression = new AlterTableExpression(tableName, options);
    this.context.add(expression);
    return expression;
  }
}