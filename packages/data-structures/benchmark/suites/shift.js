const b = require("benny");
const { LinkedList } = require("../../dist/cjs");

module.exports = b.suite(
    "Shift Items",
  
    b.add("Array", () => {
      // Setup
      const arr = [0];
      for (let i = 1; i < 1000; i++) {
        arr.push(i)
      }
      // Benchmark
      return () => arr.shift()
    }),
  
    b.add("Linked List", () => {
      // Setup
      const linkedList = new LinkedList(0);
      for (let i = 1; i < 1000; i++) {
        linkedList.push(i)
      }
      // Benchmark
      return () => linkedList.shift()
    }),
  
    b.cycle(),
    b.complete(),
    b.save({ file: "shift", version: "1.0.0" }),
    b.save({ file: "shift", format: "chart.html" })
  );
  