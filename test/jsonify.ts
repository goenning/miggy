import * as fs from "fs";
import * as path from "path";
import { Migration } from "../src/Migration";
import { jsonify } from "../src/jsonify";
import { MigrationContext } from "../src/MigrationContext";
import { expect } from "chai";

describe("jsonify", () => {
  fs.readdirSync("./test/migrations").forEach(fileName => {
    const fixture = require(`./migrations/${path.parse(fileName).name}`).default;

    it(`Up: ${fileName}`, () => {
      const migration: Migration = new fixture.migration();
      const context = new MigrationContext(migration);
      const json = jsonify(context.up());
      expect(json).to.deep.eq(fixture.up);
    });

    it(`Down: ${fileName}`, () => {
      const migration: Migration = new fixture.migration();
      const context = new MigrationContext(migration);
      const json = jsonify(context.down());
      expect(json).to.deep.eq(fixture.down);
    });
  });
});