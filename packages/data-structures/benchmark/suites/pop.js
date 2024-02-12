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
    "Pop Items",
  
    b.add("Array", () => {
      for (let i = 0; i < 1000; i++) {
        arr.pop()
      }
    }),
  
    b.add("Linked List", () => {
      for (let i = 0; i < 1000; i++) {
        linkedList.pop()
      }
    }),
  
    b.cycle(),
    b.complete(),
    b.save({ file: "pop", version: "1.0.0" }),
    b.save({ file: "pop", format: "chart.html" })
  );
  