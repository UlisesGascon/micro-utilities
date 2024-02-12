const b = require("benny");
const { LinkedList } = require("../../dist/cjs");

module.exports = b.suite(
    "Unshift Items",
  
    b.add("Array", () => {
      const arr = [0];
      for (let i = 0; i < 1000; i++) {
        arr.unshift(i)
      }
    }),
  
    b.add("Linked List", () => {
      const linkedList = new LinkedList(0);
      for (let i = 0; i < 1000; i++) {
        linkedList.unshift(i)
      }
    }),
  
    b.cycle(),
    b.complete(),
    b.save({ file: "unshift", version: "1.0.0" }),
    b.save({ file: "unshift", format: "chart.html" })
  );
  