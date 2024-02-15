const b = require("benny");
const { LinkedList } = require("../../dist/cjs");

module.exports = b.suite(
    "Access First Item",
  
    b.add("Array", () => {
      // Setup
      const arr = [0];
      for (let i = 1; i < 1000; i++) {
        arr.push(i)
      }
      // Benchmark
      return () => arr[0]
    }),
  
    b.add("Linked List (using .atFirst())", () => {
      // Setup
      const linkedList = new LinkedList(0);
      for (let i = 1; i < 1000; i++) {
        linkedList.push(i)
      }
      // Benchmark
      return () => linkedList.atFirst()
    }),

      
    b.add("Linked List (using .at(0))", () => {
      // Setup
      const linkedList = new LinkedList(0);
      for (let i = 1; i < 1000; i++) {
        linkedList.push(i)
      }
      // Benchmark
      return () => linkedList.at(0)
    }),
  
    b.cycle(),
    b.complete(),
    b.save({ file: "atfirst", version: "1.0.0" }),
    b.save({ file: "atfirst", format: "chart.html" })
  );
  