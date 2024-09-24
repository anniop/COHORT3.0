// Read-From-a-File

const fs = require("fs");

function read(err,data) {
	if(err) {
		console.log("File Not Found");
	} else {
		console.log(data);
	}
}

const contents = fs.readFile("a.txt", "utf8", read);

console.log(contents);

function expensiveOperation() {
	let i = 0;
	let sum = 0;
	for(i = 0; i<1000000000;i++) {
		sum += i;
	}
	console.log("Expensive operation completed");
}
expensiveOperation();
