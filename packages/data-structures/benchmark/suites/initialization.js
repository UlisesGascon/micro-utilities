const b = require("benny");
const { LinkedList } = require("../../dist/cjs");

module.exports = b.suite(
  "Initialization",

  b.add("Array", () => {
    const list = ["hello world"];
  }),

  b.add("Linked List", () => {
    const list = new LinkedList("hello world");
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: "initialization", version: "1.0.0" }),
  b.save({ file: "initialization", format: "chart.html" })
);