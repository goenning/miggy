import { Expression } from "../Expression";

type ColumnType = "integer" | "string";

export class ColumnExpression extends Expression {
  private name: string;
  private type: ColumnType;
  private isNullable: boolean;

  constructor(name: string, type: ColumnType) {
    super();
    this.name = name;
    this.type = type;
    this.nullable();
  }

  public notNull() {
    this.isNullable = false;
    return this;
  }
  public nullable() {
    this.isNullable = true;
    return this;
  }
}