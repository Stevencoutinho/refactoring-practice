const { getOrganization } = require("./encapsulate_record1.js");

const result = `<h1>${getOrganization().name}</h1>`;

const newName = "Steven coutinho";
getOrganization().name = newName;
