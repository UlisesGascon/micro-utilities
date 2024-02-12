const b = require("benny");
const { LinkedList } = require("../dist/cjs");

b.suite(
  "Creation",

  b.add("Array", () => {
    const list = ["hello world"];
  }),

  b.add("Linked List", () => {
    const list = new LinkedList("hello world");
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: "creation", version: "1.0.0" }),
  b.save({ file: "creation", format: "chart.html" })
);
