/**
 * # 23968 - 알고리즘 수업 - 버블 정렬 1
 * - 문제 링크 : https://www.acmicpc.net/problem/23968
 * - 문제 : K 번째 교환되는 두 개의 수를 작은 수부터 한 줄에 출력한다. 교환 횟수가 K 보다 작으면 -1을 출력한다.
 */

const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [_, K] = input[0].split(" ");
const A = input[1].split(" ").map(Number);

function bubbleSort(arr) {
	const answer = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				answer.push([arr[j + 1], arr[j]]);
				[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
			}
		}
	}

	return answer;
}

// sudo code
function bubbleeSort(A) {
	const answer = [];
	const N = A.length;
	for (let last = N; last >= 2; last--) {
		for (let i = 0; i < last - 1; i++) {
			if (A[i] > A[i + 1]) {
				answer.push([A[i], A[i + 1]]);
				[A[i], A[i + 1]] = [A[i + 1], A[i]];
			}
		}
	}
}

function solution(k, array) {
	const sortedArr = bubbleSort(array);

	return sortedArr[k - 1] ? sortedArr[k - 1].join(" ") : -1;
}

console.log(solution(K, A));
