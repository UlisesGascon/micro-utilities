const b = require("benny");
const { LinkedList } = require("../../dist/cjs");

module.exports = b.suite(
    "Reverse Items",
  
    b.add("Array", () => {
      // Setup
      const arr = [0];
      for (let i = 1; i < 1000; i++) {
        arr.push(i)
      }
      // Benchmark
      return () => arr.reverse()
    }),
  
    b.add("Linked List", () => {
      // Setup
      const linkedList = new LinkedList(0);
      for (let i = 1; i < 1000; i++) {
        linkedList.push(i)
      }
      // Benchmark
      return () => linkedList.reverse()
    }),
  
    b.cycle(),
    b.complete(),
    b.save({ file: "reverse", version: "1.0.0" }),
    b.save({ file: "reverse", format: "chart.html" })
  );
  