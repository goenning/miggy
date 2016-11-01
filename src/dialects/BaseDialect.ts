type ColumnType = "integer" | "string" | "decimal";

export abstract class BaseDialect {
  abstract mapToSqlType(type: ColumnType): string;
}