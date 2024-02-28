const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const length = input[0];

function solution(inputArray) {
	for (let i = 1; i <= length; i++) {
		let flag = true;
		const stack = [];
		const parenthesis = inputArray[i];

		for (const parenthesisStr of parenthesis) {
			if (parenthesisStr === "(") {
				stack.push(parenthesisStr);
			} else {
				const pop = stack.pop();
				if (pop !== "(") {
					console.log("NO");
					flag = false;
					break;
				}
			}
		}

		if (flag) {
			console.log(stack.length === 0 ? "YES" : "NO");
		}
	}
}

solution(input);
