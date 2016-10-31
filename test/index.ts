import { CreateProducts } from "./migrations/1_create_products";
import { jsonify } from "../src/jsonify";
import { MigrationContext } from "../src/MigrationContext";
import { expect } from "chai";

describe("jsonify", () => {
  it("simple", async () => {
    const migration = new CreateProducts();
    migration.context = new MigrationContext();
    await migration.up();
    const json = jsonify(migration.context.expressions);
    expect(json).to.deep.eq([{
      command: "create_table",
      name: "products",
      columns: [
        { name: "id", type: "integer", isNullable: false },
        { name: "name", type: "string", isNullable: false }
      ]
    }]);
  });
});