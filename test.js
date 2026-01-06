console.log("Running tests...");
console.log("Checking index.html existence...");
const fs = require('fs');
if (fs.existsSync('index.html')) {
    console.log("SUCCESS: index.html found.");
    process.exit(0);
} else {
    console.error("ERROR: index.html not found.");
    process.exit(1);
}
