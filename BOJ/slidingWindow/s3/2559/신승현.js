/**
 * # 2559 - 수열
 * - 문제 링크 : https://www.acmicpc.net/problem/2559
 * - 문제 : 첫째 줄에는 입력되는 온도의 수열에서 연속적인 K일의 온도의 합이 최대가 되는 값을 출력한다.
 */

const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

// 메모리 초과
function solution() {
	let maxSum = 0;

	for (let i = 0; i <= N - K; i++) {
		let sum = arr.slice(i, i + K).reduce((acc, cur) => acc + cur);

		maxSum = Math.max(maxSum, sum);
	}

	return maxSum;
}

function solution2() {
	let sum = arr.slice(0, K).reduce((acc, cur) => acc + cur);
	let maxSum = sum;

	for (let i = 0; i < N - K; i++) {
		sum = sum - arr[i] + arr[i + K];

		maxSum = Math.max(maxSum, sum);
	}

	return maxSum;
}

// console.log(solution());
console.log(solution2());
