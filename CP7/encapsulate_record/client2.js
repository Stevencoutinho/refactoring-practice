const {
  getRawDataOfCustomers,
  getCustomerData,
} = require("./encapsulate_record2");

const customerID = "1920";
const year = 2015;
const month = 1;
const amount = 100;

// sample update...
getCustomerData().setUsage(customerID, year, month, amount);

// sample read...
function compareUsage(customerID, laterYear, month) {
  const later = getCustomerData().rawData[customerID].usages[laterYear][month];
  const earlier =
    getCustomerData().rawData[customerID].usages[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier }; // 前年同月比較
}
