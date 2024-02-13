const b = require("benny");
const { LinkedList } = require("../../dist/cjs");

let arr = [0];
for (let i = 1; i < 1000; i++) {
  arr.push(i)
}
const linkedList = new LinkedList(0);
for (let i = 1; i < 1000; i++) {
  linkedList.push(i)
}
module.exports = b.suite(
    "Insert Items",
      // We need to modify the original array as the linked list does.
      // @see: https://stackoverflow.com/a/61406956 for the fastest way of doing this in arrays.  
    b.add("Array (Splice)", () => {
      arr = arr.splice(500, 0, "new item")
    }),

    b.add("Array (Reduce)", () => {
      arr = arr.reduce((s, a, j)=> (j-500 ? s.push(a) : s.push("new item", a), s), []);
    }),
  
    b.add("Linked List", () => {
        linkedList.insert(500, "new item")
    }),
  
    b.cycle(),
    b.complete(),
    b.save({ file: "insert", version: "1.0.0" }),
    b.save({ file: "insert", format: "chart.html" })
  );
  