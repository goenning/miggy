import * as oracle from "oracledb";
import * as mysql from "mysql";

oracle.getConnection({
  user: "system",
  password: "oracle",
  connectString: "127.0.0.1:51002/xe"
}, (err, connection) => {
  if (err) {
    console.error(err.message);
    return;
  }

  console.log("Oracle OK");
  connection.close();
});

const connection = mysql.createConnection({
  host: "localhost",
  user: "miggy",
  password: "miggy",
  database: "miggy",
  port: 51001
});

connection.connect((err) => {
  if (err) {
    console.error(err.message);
    return;
  }

  console.log("MySQL OK");
  connection.end();
});