function tePercentRaise(aPerson) {
  aPerson.salary = aPerson.salary.multiply(1.1);
}

function fivePercentRaise(aPerson) {
  aPerson.salary = aPerson.salary.multiply(1.05);
}

function raise(aPerson, factor) {
  aPerson.salary = aPerson.salary.multiply(1 + factor);
}
