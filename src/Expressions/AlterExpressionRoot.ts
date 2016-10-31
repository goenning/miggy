import { MigrationContext } from "../MigrationContext";
import { Expression } from "./Expression";
import { ColumnExpressionRoot } from "./ColumnExpressionRoot";

export type AlterTableOptions = (columns: ColumnExpressionRoot) => void;

export class AlterTableExpression extends Expression {
  public _command: string;
  public _name: string;
  private _columns: Expression[];

  constructor(tableName: string, columns: Expression[]) {
    super();
    this._command = "alter_table";
    this._name = tableName;
    this._columns = columns;
  }

  public reverse() {
    return new AlterTableExpression(this._name, this._columns.map(x => x.reverse()));
  }
}

export class AlterExpressionRoot {
  constructor(private context: MigrationContext) {

  }

  public table(tableName: string, options: AlterTableOptions) {
    const columns: Expression[] = [];
    options(new ColumnExpressionRoot(columns));
    const expression = new AlterTableExpression(tableName, columns);
    this.context.add(expression);
    return expression;
  }
}