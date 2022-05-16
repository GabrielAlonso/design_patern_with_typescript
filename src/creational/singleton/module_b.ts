import { MyDatabaseFunction } from "./db/my-database-function";
import { myDatabaseClassic as myDatabaseFromModuleA } from "./module_a";

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: "João", age: 6 });
myDatabaseClassic.add({ name: "Isadora", age: 3 });

// myDatabaseClassic.remove(0);
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);
