const b = require("benny");
const { LinkedList } = require("../dist/cjs");

b.suite(
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

b.suite(
  "Push Items",

  b.add("Array", () => {
    const list = [0];
    for (let i = 1; i < 1000; i++) {
      list.push(i)
    }
  }),

  b.add("Linked List", () => {
    const list = new LinkedList(0);
    for (let i = 1; i < 1000; i++) {
      list.push(i)
    }
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: "push", version: "1.0.0" }),
  b.save({ file: "push", format: "chart.html" })
);
