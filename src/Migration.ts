import { MigrationContext } from "./MigrationContext";
import { CreateExpressionRoot } from "./Expressions/CreateExpressionRoot";

export abstract class Migration {
  public context: MigrationContext;

  get create() {
    return new CreateExpressionRoot(this.context);
  }

  abstract up(): void;
}