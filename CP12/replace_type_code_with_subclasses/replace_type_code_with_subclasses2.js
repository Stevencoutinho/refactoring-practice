class Employee {
  constructor(name, type) {
    this.validateType(type);
    this._name = name;
    this._type = type;
  }
  validateType(arg) {
    if (!["engineer", "manager", "salesman"].includes(arg)) {
      throw new Error(`従業員のタイプコードが不正: ${arg}`);
    }
  }
  get typeString() {
    return this._type.toString();
  }
  get type() {
    return this._type;
  }
  set type(arg) {
    this._type = Employee.createEmployeeType(arg);
  }
  get capitalizedType() {
    return (
      this.typeString.charAt(0).toUpperCase() +
      this.typeString.substr(1).toLowerCase()
    );
  }
  toString() {
    return `${this._name} (${this.type.capitalizedName})`;
  }
  static createEmployeeType(aString) {
    switch (aString) {
      case "engineer":
        return new Engineer();
      case "manager":
        return new Manager();
      case "salesman":
        return new Salesman();
      default:
        throw new Error(`従業員のタイプコードが不正: ${aString}`);
    }
  }
}

class EmployeeType {
  get capitalizedName() {
    return (
      this.toString().charAt(0).toUpperCase() +
      this.toString().substr(1).toLowerCase()
    );
  }
}

class Engineer extends Employee {
  toString() {
    return "engineer";
  }
}

class Manager extends Employee {
  toString() {
    return "manager";
  }
}

class Salesman extends Employee {
  toString() {
    return "salesman";
  }
}
