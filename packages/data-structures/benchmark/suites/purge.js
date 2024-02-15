const b = require("benny");
const { LinkedList } = require("../../dist/cjs");

module.exports = b.suite(
    "Purge Items",
    // @see: https://jsben.ch/hyj65 and https://stackoverflow.com/a/1232046
    b.add("Array (length to 0)", () => {
      // This is the fastest method without re-initializing the array
      // Setup
      const arr = [0];
      for (let i = 1; i < 1000; i++) {
        arr.push(i)
      }
      // Benchmark
      return () => arr.length = 0
    }),

    b.add("Array (new array)", () => {
      // This is the fastest method with re-initializing the array
      // Setup
      let arr = [0];
      for (let i = 1; i < 1000; i++) {
        arr.push(i)
      }
      // Benchmark
      return () => arr = []
    }),
  
    b.add("Linked List", () => {
      // Setup
      const linkedList = new LinkedList(0);
      for (let i = 1; i < 1000; i++) {
        linkedList.push(i)
      }
      // Benchmark
      return () => linkedList.purge()
    }),
  
    b.cycle(),
    b.complete(),
    b.save({ file: "purge", version: "1.0.0" }),
    b.save({ file: "purge", format: "chart.html" })
  );
  