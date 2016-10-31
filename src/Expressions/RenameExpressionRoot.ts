import { MigrationContext } from "../MigrationContext";
import { Expression } from "./Expression";
import { ColumnExpressionRoot } from "./ColumnExpressionRoot";

export type RenameTableOptions = (columns: ColumnExpressionRoot) => void;

export class RenameTableExpression extends Expression {
  public _command: string;
  public _name: string;
  public _newName: string;
  public _columns: Expression[];

  constructor(tableName: string, newTableName: string) {
    super();
    this._command = "rename_table";
    this._name = tableName;
    this._newName = newTableName;
  }

  public reverse() {
    return new RenameTableExpression(this._newName, this._name);
  }
}

export class RenameExpressionRoot {
  constructor(private context: MigrationContext) {

  }

  public table(tableName: string, newTableName: string) {
    const expression = new RenameTableExpression(tableName, newTableName);
    this.context.add(expression);
    return expression;
  }
}