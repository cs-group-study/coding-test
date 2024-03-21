//  문제 번호:https://www.acmicpc.net/problem/2292
const readFileSync = require("fs").readFileSync;
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N] = readFileSync(filePath).toString().trim().split("\n");

let num = 1,
	layer = 1;

while (num < N) {
	num += 6 * layer;
	layer++;
}

console.log(layer);
