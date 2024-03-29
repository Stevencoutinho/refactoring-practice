const { assert } = require("chai");

function circumference(radius) {
  return 2 * Math.PI * radius;
}

function inNewEngland(stateCode) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

const newEnglanders = someCustomers.filter((c) =>
  inNewEngland(c.address.state)
);

class Book {
  addReservation(customer) {
    this.zz_addReservation(customer, false);
  }

  zz_addReservation(customer, isPriority) {
    assert(isPriority === true || isPriority === false);
    this._reservations.push(customer);
  }
}

module.exports = {
  circumference,
};
