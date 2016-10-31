import {
  AddColumnExpression,
  AddDecimalColumnExpression,
  DropColumnExpression
} from "./ColumnExpression";
import { Expression } from "./Expression";

export class ColumnExpressionRoot {
  constructor(private columns: Expression[]) {
  }

  id() {
    const column = new AddColumnExpression("id", "integer");
    column.notNull();
    this.columns.push(column);
    return column;
  };

  string(columnName: string) {
    const column = new AddColumnExpression(columnName, "string");
    this.columns.push(column);
    return column;
  };

  decimal(columnName: string) {
    const column = new AddDecimalColumnExpression(columnName, "decimal");
    this.columns.push(column);
    return column;
  };

  drop(columnName: string) {
    const column = new DropColumnExpression(columnName);
    this.columns.push(column);
    return column;
  };
}