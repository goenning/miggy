import { ColumnExpression, DecimalColumnExpression } from "./ColumnExpression";

export class ColumnExpressionRoot {
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

  decimal(columnName: string): DecimalColumnExpression {
    const column = new DecimalColumnExpression(columnName, "decimal");
    this.columns.push(column);
    return column;
  };
}