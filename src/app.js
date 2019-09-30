function showProcessDetails() {
  console.log(`Node version: ${process.version}`);
  console.log(`Platform: ${process.platform} ${process.arch}`);
  console.log(`Arguments: ${process.argv.join("")}`);
}

showProcessDetails();

const firstArgument = parseInt(process.argv[2]);
const secondArgument = parseInt(process.argv[3]);

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}

const addResult = add(firstArgument, secondArgument);
console.log(`Add Result ${addResult}`);
const subResult = sub(firstArgument, secondArgument);
console.log(`Sub Result ${subResult}`);
