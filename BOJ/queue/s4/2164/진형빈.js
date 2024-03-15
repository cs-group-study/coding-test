//  문제 번호: https://www.acmicpc.net/problem/2161
const readFileSync = require("fs").readFileSync;
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = readFileSync(filePath).toString().trim().split("\n");

const count = Number(input[0]);

const ogCard = [];
Array.from({ length: count }, (_, i) => ogCard.push(i + 1));

const ans = [];
for (let i = 0; i <= count; i++) {
	ans.push(ogCard[0]);
	ogCard.shift();
	ogCard.push(ogCard[0]);
	ogCard.shift();
}
ans.pop();
console.log(ans.join(" "));
