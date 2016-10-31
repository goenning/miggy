import { BaseDialect } from "../dialects/BaseDialect";

export class Expression {
  public reverse(): Expression {
    return new Expression();
  }

  public toSql(dialect: BaseDialect): string[] {
    return [ "" ];
  }
}