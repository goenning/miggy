import { Expression } from "./Expressions/Expression";

export class MigrationContext {
  public expressions: Expression[] = [];

  public add(expression: Expression) {
    this.expressions.push(expression);
  }
}