//  문제 번호:https://www.acmicpc.net/problem/10828
const readFileSync = require("fs").readFileSync;
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = readFileSync(filePath).toString().trim().split("\n");

const [N, ...commands] = input;

const stack = [];
let topNum = 0;
const answers = [];
for (let i = 0; i < N; i++) {
	const [command, num] = commands[i].split(" ");

	switch (command) {
		case "push":
			Number(num);
			stack[topNum++] = num;
			break;
		case "pop":
			if (topNum === 0) {
				answers.push(-1);
			} else {
				answers.push(stack[topNum - 1]);
				topNum -= 1;
			}
			break;
		case "size":
			answers.push(topNum);
			break;
		case "empty":
			if (topNum === 0) {
				answers.push(1);
			} else answers.push(0);
			break;
		case "top":
			if (topNum === 0) {
				answers.push(-1);
			} else answers.push(stack[topNum - 1]);
			break;
		default:
			break;
	}
}
console.log(answers.join("\n"));
