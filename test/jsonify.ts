import * as fs from "fs";
import * as path from "path";
import { jsonify } from "../src/jsonify";
import { MigrationContext } from "../src/MigrationContext";
import { expect } from "chai";

describe("jsonify", () => {
  fs.readdirSync("./test/migrations").forEach(fileName => {
    const fixture = require(`./migrations/${path.parse(fileName).name}`).default;

    it(fileName, () => {
      const migration = new fixture.migration();
      migration.context = new MigrationContext();
      migration.up();
      const json = jsonify(migration.context.expressions);
      expect(json).to.deep.eq(fixture.expect);
    });
  });
});