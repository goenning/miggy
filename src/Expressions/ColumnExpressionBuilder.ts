import { ColumnExpression } from "./Column/ColumnExpression";

export class ColumnExpressionBuilder {
  constructor(private columns: ColumnExpression[]) {
  }

  id(): ColumnExpression {
    const column = new ColumnExpression("id", "integer");
    column.notNull();
    this.columns.push(column);
    return column;
  };

  string(columnName: string): ColumnExpression {
    const column = new ColumnExpression(columnName, "string");
    this.columns.push(column);
    return column;
  };
}