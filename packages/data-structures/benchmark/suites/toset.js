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
    "Convert Items to Set",
  
    b.add("Array", () => {
      new Set(arr)
    }),
  
    b.add("Linked List", () => {
      linkedList.toSet()
    }),
  
    b.cycle(),
    b.complete(),
    b.save({ file: "toset", version: "1.0.0" }),
    b.save({ file: "toset", format: "chart.html" })
  );
  