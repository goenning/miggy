> `This is a work in progress`

# miggy 

`SQL Database Migration made easy with TypeScript`

[![NPM](https://img.shields.io/npm/v/miggy.svg)](https://www.npmjs.com/package/miggy)
[![Build](https://travis-ci.org/goenning/miggy.svg?branch=master)](https://travis-ci.org/goenning/miggy)
[![Coverage](https://coveralls.io/repos/github/goenning/miggy/badge.svg?branch=master)](https://coveralls.io/github/goenning/miggy?branch=master)
![Dependencies](https://david-dm.org/goenning/miggy.svg)
![devDependencies](https://david-dm.org/goenning/miggy/dev-status.svg#info=devDependencies)

## Features

- Fully Typed!
- Auto Reverse from `up`
- Supports Postgres, MySQL, MariaDB, Oracle and MSSQL

## Examples

```typescript
import { Migration } from "miggy";

export class CreateProducts extends Migration {
  up() {
    this.create.table("products", (t) => {
      t.id();
      t.string("name").length(40);
      t.decimal("price").precision(10).scale(2);
      t.string("description").length(500).notNull();
    });
  }

  down() {
    this.drop.table("products");
  }
}
```