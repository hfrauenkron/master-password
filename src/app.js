const { readSecrets, writeSecrets } = require("./models/secrets");

const userArgv = process.argv.slice(2);
const [action, key, value] = userArgv;

function set(key, value) {
  console.log("set", key, value);
  const newSecrets = {
    [key]: value
  };
  writeSecrets(newSecrets);
}

function unset(key) {
  console.log("unset", key);
}

function get(key) {
  const secrets = readSecrets();
  console.log("get", key);
  const secret = secrets[key];
  console.log(secret);
}

const commands = {
  set,
  get,
  unset
};

const command = commands[action];
if (!command) {
  throw new Error("unknown action");
}
command(key, value);

// /*
// commands:

// set {key} {value}
// unset {key}
// get {key}
// */

// function showProcessDetails() {
//   console.log(`Node version: ${process.version}`);
//   console.log(`Platform: ${process.platform} ${process.arch}`);
//   console.log(`Arguments: ${process.argv.join("")}`);
// }

// showProcessDetails();

// // const userArgv = process.argv.slice(2);
// // const action = userArgv[0];
// // const key = userArgv[1];
// // const value = userArgv[2];

// const [action, key, value] = process.argv.slice(2);

// // console.log(action, key, value);

// function set(key, value) {
//   console.log("set", key, value);
// }

// function unset(key) {
//   console.log("unset", key, value);
// }

// function get(key) {
//   console.log("get", key, value);
// }

// // call the correct function based on action
// // // solution 1:
// // switch (action) {
// //   case "get":
// //     get(key);
// //     break;
// //   case "set":
// //     set(key, value);
// //     break;
// //   case "unset":
// //     unset(key);
// //     break;
// //   default:
// //     throw new Error("unknown action");
// // }

// // // solution 2:
// // function perform() {
// //   if (action === "set") {
// //     set(key, value);
// //   } else if (action === "unset") {
// //     unset(key);
// //   } else if (action === "get") {
// //     get(key);
// //   } else {
// //     throw new Error("unknown action");
// //   }
// // }
// // perform();

// // solution 3:
// const commands = {
//   set,
//   get,
//   unset
// };

// const command = commands[action];
// if (!command) {
//   throw new Error("unknown action");
// }
// command(key, value);
