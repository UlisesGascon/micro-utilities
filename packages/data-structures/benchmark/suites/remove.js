const b = require("benny");
const { LinkedList } = require("../../dist/cjs");

module.exports = b.suite(
    "Remove Items",

    b.add("Array", () => {
      // Setup
      const arr = [0];
      for (let i = 1; i < 1000; i++) {
        arr.push(i)
      }
      // Benchmark
      return () => arr.splice(500, 1)
    }),
  
    b.add("Linked List", () => {
      // Setup
      const linkedList = new LinkedList(0);
      for (let i = 1; i < 1000; i++) {
        linkedList.push(i)
      }
      // Benchmark
      return () => linkedList.replace(500, "new item")
    }),
  
    b.cycle(),
    b.complete(),
    b.save({ file: "remove", version: "1.0.0" }),
    b.save({ file: "remove", format: "chart.html" })
  );
  