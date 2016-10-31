import { Expression } from "./expressions/Expression";
import { Migration } from "./Migration";

export class MigrationContext {
  public expressions: Expression[] = [];
  constructor(private migration: Migration) {
    migration.context = this;
  }

  public up(): Expression[] {
    this.expressions = [];
    this.migration.up();
    return this.expressions;
  }

  public down(): Expression[] {
    this.expressions = [];
    this.migration.down();
    if (this.expressions.length === 0 && this.migration._reverse) {
      this.migration.up();
      for (let i = 0; i < this.expressions.length; i++) {
        this.expressions[i] = this.expressions[i].reverse();
      }
    }
    return this.expressions;
  }

  public add(expression: Expression) {
    this.expressions.push(expression);
  }
}