import { Expression } from "./Expression";

type ColumnType = "integer" | "string" | "decimal";

export class ColumnExpression extends Expression {
  private _name: string;
  private _type: ColumnType;
  private _notNull: boolean;

  constructor(name: string, type: ColumnType) {
    super();
    this._name = name;
    this._type = type;
    this.nullable();
  }

  public notNull() {
    this._notNull = true;
    return this;
  }
  public nullable() {
    this._notNull = false;
    return this;
  }
}

export class DecimalColumnExpression extends ColumnExpression {
  private _precision: number;
  private _scale: number;

  scale(scale: number) {
    this._scale = scale;
    return this;
  }

  precision(precision: number) {
    this._precision = precision;
    return this;
  }
}