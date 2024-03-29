const { Order } = require("./replace_primitive_with_object");

const orders = [
  new Order({ priority: "high" }),
  new Order({ priority: "high" }),
  new Order({ priority: "low" }),
  new Order({ priority: "rush" }),
];

const highPriorityCont = orders.filter((o) =>
  o.priority.higherThan(new priority("normal"))
).length;
