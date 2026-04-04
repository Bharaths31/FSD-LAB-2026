// test.js - Verify Node.js environment setup
console.log("===== Development Environment Test =====");
console.log("Node.js Version:", process.version);
console.log("Platform:", process.platform);
console.log("Architecture:", process.arch);
console.log("Current Directory:", process.cwd());
console.log("========================================");
console.log("✅ Node.js is working correctly!");

// Basic JavaScript test
const sum = (a, b) => a + b;
console.log(`\nBasic JS Test: 5 + 3 = ${sum(5, 3)}`);
console.log("✅ JavaScript ES6 features are supported!");
