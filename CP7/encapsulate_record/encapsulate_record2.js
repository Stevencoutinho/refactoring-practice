export let customerData = [
  {
    1920: {
      name: "martin",
      id: "1920",
    },
    usages: {
      2016: {
        1: 50,
        2: 55,
        // 3 月分以降は省略
      },
      2015: {
        1: 70,
        2: 63,
        // 3 月分以降は省略
      },
    },
  },
  {
    38673: {
      name: "neal",
      id: "38673",
    },
    usages: {
      2016: {
        1: 65,
        2: 54,
        // 3 月分以降は省略
      },
      2015: {
        1: 72,
        2: 54,
        // 3 月分以降は省略
      },
    },
  },
];

export function getRawDataOfCustomers() {
  return customerData;
}

export function setRawDataOfCustomers(arg) {
  customerData = arg;
}

class CustomerData {
  constructor(data) {
    this._data = data;
  }
}
