const b = require("benny");
const { LinkedList } = require("../../dist/cjs");

module.exports = b.suite(
    "Replace Items",

    b.add("Array (Splice)", () => {
      // Setup
      const arr = [0];
      for (let i = 1; i < 1000; i++) {
        arr.push(i)
      }
      // Benchmark
      return () => arr[500] = "new item"
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
    b.save({ file: "replace", version: "1.0.0" }),
    b.save({ file: "replace", format: "chart.html" })
  );
  