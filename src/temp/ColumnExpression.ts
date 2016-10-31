import { Expression } from "./Expression";

type ColumnType = "integer" | "string" | "decimal";

export class DropColumnExpression extends Expression {
  private _command: string;
  private _name: string;

  constructor(name: string) {
    super();
    this._command = "drop";
    this._name = name;
  }
}

export class AddColumnExpression extends Expression {
  private _command: string;
  private _name: string;
  private _type: ColumnType;
  private _notNull: boolean;

  constructor(name: string, type: ColumnType) {
    super();
    this._command = "add";
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

  public reverse() {
    return new DropColumnExpression(this._name);
  }
}

export class AddDecimalColumnExpression extends AddColumnExpression {
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