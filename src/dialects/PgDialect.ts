import { BaseDialect } from "./BaseDialect";
type ColumnType = "integer" | "string" | "decimal";

export class PgDialect extends BaseDialect {
  mapToSqlType(type: ColumnType): string {
    switch (type) {
      case "string":
        return "character varying";
      default:
        return type;
    }
  }
}