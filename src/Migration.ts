import { MigrationContext } from "./MigrationContext";
import { CreateExpressionRoot } from "./Expressions/CreateExpressionRoot";
import { AlterExpressionRoot } from "./Expressions/AlterExpressionRoot";
import { RenameExpressionRoot } from "./Expressions/RenameExpressionRoot";
import { DropExpressionRoot } from "./Expressions/DropExpressionRoot";

export abstract class Migration {
  public context: MigrationContext;
  public _reverse: boolean;

  get create() {
    return new CreateExpressionRoot(this.context);
  }

  get alter() {
    return new AlterExpressionRoot(this.context);
  }

  get rename() {
    return new RenameExpressionRoot(this.context);
  }

  get drop() {
    return new DropExpressionRoot(this.context);
  }

  protected reverse() {
    this._reverse = true;
  }

  abstract up(): void;
  abstract down(): void;
}