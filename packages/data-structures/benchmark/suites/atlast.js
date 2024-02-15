const b = require("benny");
const { LinkedList } = require("../../dist/cjs");

module.exports = b.suite(
    "Access Last Item",
  
    b.add("Array", () => {
      // Setup
      const arr = [0];
      for (let i = 1; i < 1000; i++) {
        arr.push(i)
      }
      // Benchmark
      return () => arr[999]
    }),
  
    b.add("Linked List (using .atLast())", () => {
      // Setup
      const linkedList = new LinkedList(0);
      for (let i = 1; i < 1000; i++) {
        linkedList.push(i)
      }
      // Benchmark
      return () => linkedList.atLast()
    }),

    b.add("Linked List (using .at(n))", () => {
      // Setup
      const linkedList = new LinkedList(0);
      for (let i = 1; i < 1000; i++) {
        linkedList.push(i)
      }
      // Benchmark
      return () => linkedList.at(999)
    }),
  
    b.cycle(),
    b.complete(),
    b.save({ file: "atlast", version: "1.0.0" }),
    b.save({ file: "atlast", format: "chart.html" })
  );
  