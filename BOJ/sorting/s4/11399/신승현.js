/**
 * # 11399 - ATM
 * - 문제 링크 : https://www.acmicpc.net/problem/11399
 * - 문제 : 줄을 서 있는 사람의 수 N과 각 사람이 돈을 인출하는데 걸리는 시간 Pi가 주어졌을 때, 각 사람이 돈을 인출하는데 필요한 시간의 합의 최솟값을 구하시오.
 */

const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, ...P] = input;

function solution(arr) {
	const sortedArr = arr[0]
		.split(" ")
		.map(Number)
		.sort((a, b) => a - b);

	const minimumTime = [];

	sortedArr.reduce((acc, cur) => {
		minimumTime.push(acc + cur);
		return acc + cur;
	}, 0);

	const answer = minimumTime.reduce((acc, cur) => acc + cur);
	return answer;
}

console.log(solution(P));
