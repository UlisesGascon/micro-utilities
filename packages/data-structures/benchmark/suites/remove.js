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
    "Remove Items",

    b.add("Array", () => {
      arr.splice(500, 1)
    }),
  
    b.add("Linked List", () => {
        linkedList.replace(500, "new item")
    }),
  
    b.cycle(),
    b.complete(),
    b.save({ file: "remove", version: "1.0.0" }),
    b.save({ file: "remove", format: "chart.html" })
  );
  