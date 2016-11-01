import { Expression } from "./Expression";
import { BaseDialect } from "../dialects/BaseDialect";

type ColumnType = "integer" | "string" | "decimal";

export class DropColumnExpression extends Expression {
  protected _command: string;
  protected _name: string;

  constructor(name: string) {
    super();
    this._command = "drop";
    this._name = name;
  }
}

export class AddColumnExpression extends Expression {
  protected _command: string;
  protected _name: string;
  protected _type: ColumnType;
  protected _notNull: boolean;

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

  public toSql(dialect: BaseDialect): string[] {
    return [ `${this._name} ${this._type}` ];
  }
}

export class AddStringColumnExpression extends AddColumnExpression {
  protected _length: number;

  constructor(name: string, length: number) {
    super(name, "string");
    this._length = length;
  }

  public toSql(dialect: BaseDialect): string[] {
    return [ `${this._name} ${dialect.mapToSqlType(this._type)}(${this._length})` ];
  }
}

export class AddDecimalColumnExpression extends AddColumnExpression {
  protected _precision: number;
  protected _scale: number;

  constructor(name: string) {
    super(name, "decimal");
  }

  scale(scale: number) {
    this._scale = scale;
    return this;
  }

  precision(precision: number) {
    this._precision = precision;
    return this;
  }
}