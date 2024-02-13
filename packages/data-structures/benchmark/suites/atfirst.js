const b = require("benny");
const { LinkedList } = require("../../dist/cjs");

const arr = [0];
for (let i = 1; i < 1000; i++) {
  arr.push(i)
}
const linkedList = new LinkedList(0);
for (let i = 1; i < 1000; i++) {
  linkedList.push(i)
}
module.exports = b.suite(
    "Access First Item",
  
    b.add("Array", () => {
      arr[0]
    }),
  
    b.add("Linked List", () => {
      linkedList.atFirst()
    }),
  
    b.cycle(),
    b.complete(),
    b.save({ file: "atfirst", version: "1.0.0" }),
    b.save({ file: "atfirst", format: "chart.html" })
  );
  