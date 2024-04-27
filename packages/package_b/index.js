const packageA = require("package_a");

try {
  packageA();
  console.log("Hello from Package B!");
} catch (error) {
  console.log("error", error);
}
