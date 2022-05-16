import { MyDatabaseFunction } from "./db/my-database-function";

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: "Gabriel", age: 37 });
myDatabaseClassic.add({ name: "Aline", age: 32 });

export { myDatabaseClassic };
