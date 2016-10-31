export type CreateTableOptions = (t: ColumnDescriptor) => void;

export class ColumnDescriptor {
  id() {

  };
  string(columnName: string) {

  };
}

export class Schema {
  createTable(tableName: string, options: CreateTableOptions) {
    return Promise.resolve();
  }
}