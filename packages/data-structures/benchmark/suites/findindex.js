const b = require("benny");
const { LinkedList } = require("../../dist/cjs");

module.exports = b.suite(
    "Find an item index",
  
    b.add("Array", () => {
      // Setup
      const arr = [0];
      for (let i = 1; i < 1000; i++) {
        arr.push(i)
      }
      // Benchmark
      return () => arr.find(el => el === 999)
    }),
  
    b.add("Linked List", () => {
      // Setup
      const linkedList = new LinkedList(0);
      for (let i = 1; i < 1000; i++) {
        linkedList.push(i)
      }
      // Benchmark
      return () => linkedList.find(el => el === 999)
    }),
  
    b.cycle(),
    b.complete(),
    b.save({ file: "findindex", version: "1.0.0" }),
    b.save({ file: "findindex", format: "chart.html" })
  );
  