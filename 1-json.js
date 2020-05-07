const fs = require("fs");
const jsonBuffer = fs.readFileSync("1-json.json");

const jsonRes = jsonBuffer.toString();

const objData = JSON.parse(jsonRes);
objData.name = "Kelvin";
objData.age = 20;
const stringifiedData = JSON.stringify(objData);
fs.writeFileSync("1-json.json", stringifiedData);
