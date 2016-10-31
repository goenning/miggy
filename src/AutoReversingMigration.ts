import { Migration } from "./Migration";

export abstract class AutoReversingMigration extends Migration {
  constructor() {
    super();
    this._reverse = true;
  }

  abstract up(): void;
  down(): void {

  }
}