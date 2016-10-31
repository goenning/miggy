import { MigrationContext } from "../MigrationContext";
import { Expression } from "./Expression";
import { ColumnExpressionRoot } from "./ColumnExpressionRoot";
import { DropTableExpression } from "./DropExpressionRoot";

export type CreateTableOptions = (columns: ColumnExpressionRoot) => void;

export class CreateTableExpression extends Expression {
  public _command: string;
  public _name: string;
  public _columns: Expression[];

  constructor(tableName: string, options: CreateTableOptions) {
    super();
    this._command = "create_table";
    this._name = tableName;
    this._columns = [];
    options(new ColumnExpressionRoot(this._columns));
  }

  public reverse() {
    return new DropTableExpression(this._name);
  }
}

export class CreateExpressionRoot {
  constructor(private context: MigrationContext) {

  }

  public table(tableName: string, options: CreateTableOptions) {
    const expression = new CreateTableExpression(tableName, options);
    this.context.add(expression);
    return expression;
  }
}