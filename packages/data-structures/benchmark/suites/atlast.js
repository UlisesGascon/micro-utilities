const b = require("benny");
const { LinkedList } = require("../../dist/cjs");

const arr = [0];
for (let i = 1; i < 1000; i++) {
  arr.push(i)
}
const linkedList = new LinkedList(0);
for (let i = 1; i < 1000; i++) {
  linkedList.push(i)
}
module.exports = b.suite(
    "Access Last Item",
  
    b.add("Array", () => {
      arr[999]
    }),
  
    b.add("Linked List", () => {
      linkedList.atLast()
    }),
  
    b.cycle(),
    b.complete(),
    b.save({ file: "atlast", version: "1.0.0" }),
    b.save({ file: "atlast", format: "chart.html" })
  );
  