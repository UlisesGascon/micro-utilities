const b = require("benny");
const { LinkedList } = require("../../dist/cjs");

module.exports = b.suite(
    "Access random Items",
  
    b.add("Array", () => {
      // Setup
      const arr = [0];
      for (let i = 1; i < 1000; i++) {
        arr.push(i)
      }
      // Benchmark
      return () => arr[998]
    }),
  
    b.add("Linked List", () => {
      // Setup
      const linkedList = new LinkedList(0);
      for (let i = 1; i < 1000; i++) {
        linkedList.push(i)
      }
      // Benchmark
      return () => linkedList.at(998)
    }),
  
    b.cycle(),
    b.complete(),
    b.save({ file: "at", version: "1.0.0" }),
    b.save({ file: "at", format: "chart.html" })
  );
  