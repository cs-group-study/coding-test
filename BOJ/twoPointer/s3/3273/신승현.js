/**
 * # 3273 - 두 수의 합
 * - 문제 링크 : https://www.acmicpc.net/problem/3273
 * - 문제 : n개의 서로 다른 양의 정수 a1, a2, ..., an으로 이루어진 수열이 있다. ai의 값은 1보다 크거나 같고, 1000000보다 작거나 같은 자연수이다. 자연수 x가 주어졌을 때, ai + aj = x (1 ≤ i < j ≤ n)을 만족하는 (ai, aj)쌍의 수를 구하는 프로그램을 작성하시오.
 * 시간: 220ms
 */

const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const x = Number(input[2]);

function solution() {
	let count = 0;
	let start = 0;
	let end = n - 1;
	const sortedArr = arr.sort((a, b) => a - b);

	while (start < end) {
		let sum = sortedArr[start] + sortedArr[end];
		console.log(start, end);
		if (sum === x) {
			count += 1;
			start += 1;
		} else if (sum < x) {
			start += 1;
		} else if (sum > x) {
			end -= 1;
		}
	}

	return count;
}

console.log(solution());

// --- 춘구님 풀이 : 시간 : 1988ms
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const [[size], nums, [targetSum]] = require("fs").readFileSync(filePath).toString().trim().split("\n").map((e) => e.split(" ").map(Number));

// const sortedNums = nums.sort((a, b) => a - b);
// let answer = 0;

// for (let start = 0; start < size; start += 1) {
//     for (let end = start + 1; end < size; end += 1) {
//         const currSum = sortedNums[start] + sortedNums[end];
//         if (targetSum < currSum) break;
//         if (currSum === targetSum) answer += 1;
//     }
// }

// console.log(answer);
