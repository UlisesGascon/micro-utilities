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
    "Shift Items",
  
    b.add("Array", () => {
      for (let i = 0; i < 1000; i++) {
        arr.shift()
      }
    }),
  
    b.add("Linked List", () => {
      for (let i = 0; i < 1000; i++) {
        linkedList.shift()
      }
    }),
  
    b.cycle(),
    b.complete(),
    b.save({ file: "shift", version: "1.0.0" }),
    b.save({ file: "shift", format: "chart.html" })
  );
  