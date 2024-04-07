/**
 * # 2003 - 수들의 합 2
 * - 문제 링크 : https://www.acmicpc.net/problem/2003
 * - 문제 : N개의 수로 된 수열 A[1], A[2], …, A[N] 이 있다. 이 수열의 i번째 수부터 j번째 수까지의 합 A[i] + A[i+1] + … + A[j-1] + A[j]가 M이 되는 경우의 수를 구하는 프로그램을 작성하시오.
 */

const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

function solution() {
	let count = 0;
	let leftIndex = 0; // startPoint
	let rightIndex = 0; // endPoint
	let sum = 0;
	while (rightIndex <= N) {
		if (sum === M) {
			count += 1;
			sum -= arr[leftIndex];
			leftIndex += 1;
		} else if (sum > M) {
			sum -= arr[leftIndex];
			leftIndex += 1;
		} else if (sum < M) {
			sum += arr[rightIndex];
			rightIndex += 1;
		}
	}
	return count;
}

console.log(solution());
