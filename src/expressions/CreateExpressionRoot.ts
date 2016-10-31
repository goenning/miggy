import { MigrationContext } from "../MigrationContext";
import { Expression } from "./Expression";
import { ColumnExpressionRoot } from "./ColumnExpressionRoot";
import { DropTableExpression } from "./DropExpressionRoot";
import { BaseDialect } from "../dialects/BaseDialect";

export type CreateTableOptions = (columns: ColumnExpressionRoot) => void;

export class CreateTableExpression extends Expression {
  public _command: string;
  public _name: string;
  public _columns: Expression[];

  constructor(tableName: string, columns: Expression[]) {
    super();
    this._command = "create_table";
    this._name = tableName;
    this._columns = columns;
  }

  public reverse() {
    return new DropTableExpression(this._name);
  }

  public toSql(dialect: BaseDialect): string[] {
    const toColumn = (x: any) => `${x._name} ${x._type}`;
    return [ `CREATE TABLE ${this._name} (${this._columns.map(toColumn).join(", ")})` ];
  }
}

export class CreateExpressionRoot {
  constructor(private context: MigrationContext) {

  }

  public table(tableName: string, options: CreateTableOptions) {
    const columns: Expression[] = [];
    options(new ColumnExpressionRoot(columns));
    const expression = new CreateTableExpression(tableName, columns);
    this.context.add(expression);
    return expression;
  }
}