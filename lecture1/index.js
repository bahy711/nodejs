// const helpers = require('./helper')
// helper.read

const { read, write } = require("./helper");
const [, , option, value] = process.argv;

switch (option) {
  case "add":

    data = read();
    data.push({ id: 5, value });
    write(data);
    
    break;

  case "delete":
    break;

  case "edit":
    break;

  case "list":
    console.log(read());
    break;

  default:
    break;
}
