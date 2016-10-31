import { MigrationContext } from "./MigrationContext";
import { CreateExpressionRoot } from "./Expressions/CreateExpressionRoot";
import { AlterExpressionRoot } from "./Expressions/AlterExpressionRoot";

export abstract class Migration {
  public context: MigrationContext;

  get create() {
    return new CreateExpressionRoot(this.context);
  }

  get alter() {
    return new AlterExpressionRoot(this.context);
  }

  abstract up(): void;
}