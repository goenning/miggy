import { MigrationContext } from "../MigrationContext";
import { Expression } from "./Expression";
import { ColumnExpressionBuilder } from "./ColumnExpressionBuilder";
import { ColumnExpression } from "./Column/ColumnExpression";
import { Column } from "./Column";

export type CreateTableOptions = (columns: ColumnExpressionBuilder) => void;

export class CreateTableExpression extends Expression {
  public command: string;
  public name: string;
  public columns: ColumnExpression[];

  constructor(tableName: string, options: CreateTableOptions) {
    super();
    this.command = "create_table";
    this.name = tableName;
    this.columns = [];
    options(new ColumnExpressionBuilder(this.columns));
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