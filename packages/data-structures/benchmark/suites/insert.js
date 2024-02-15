const b = require("benny");
const { LinkedList } = require("../../dist/cjs");

module.exports = b.suite(
    "Insert Items",
      // We need to modify the original array as the linked list does.
      // @see: https://stackoverflow.com/a/61406956 for the fastest way of doing this in arrays.  
    b.add("Array (Splice)", () => {
      // Setup
      let arr = [0];
      for (let i = 1; i < 1000; i++) {
        arr.push(i)
      }
      // Benchmark
      return () => arr = arr.splice(500, 0, "new item")
    }),

    b.add("Array (Reduce)", () => {
      // Setup
      let arr = [0];
      for (let i = 1; i < 1000; i++) {
        arr.push(i)
      }
      // Benchmark
      return () => arr = arr.reduce((s, a, j)=> (j-500 ? s.push(a) : s.push("new item", a), s), []);
    }),
  
    b.add("Linked List", () => {
      // Setup
      const linkedList = new LinkedList(0);
      for (let i = 1; i < 1000; i++) {
        linkedList.push(i)
      }
      // Benchmark
      return () => linkedList.insert(500, "new item")
    }),
  
    b.cycle(),
    b.complete(),
    b.save({ file: "insert", version: "1.0.0" }),
    b.save({ file: "insert", format: "chart.html" })
  );
  