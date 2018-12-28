const commandLineArgs = require("command-line-args");
const fs = require("fs");

const optionsDefinition = [
  { name: "name", type: String },
  { name: "order", type: String },
  { name: "payment", type: Number },
  { name: "exit", type: Boolean }
];

const getJson = fs.readFileSync("db.json");
const data = JSON.parse(getJson);
const saveData = newData => {
  const toString = JSON.stringify(newData);
  fs.writeFileSync("db.json", toString);
};

const options = commandLineArgs(optionsDefinition);

if (options.name) {
  data.name = options.name;
  console.log(
    `Hello ${options.name}, we are serving Bakso, Nasi Goreng & Es Cendol`
  );
  saveData(data);
} else if (options.order) {
  data.order = options.order;
  console.log(`Ok ${data.name}, that would be $25, you will pay with ...`);
  saveData(data);
} else if (options.payment) {
  data.payment = options.payment;
  console.log(
    `Your change is ${options.payment -
      25}, Thank you for coming here...Type --exit to get the order :)`
  );
  saveData(data);
} else if (options.exit) {
  console.log(data);
  console.log("Thank You!");
  data.name = "";
  data.order = "";
  data.payment = "";
} else {
  console.log(`Hellooo , please enter your name`);
}
