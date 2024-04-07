/**
 * # 23881 - 알고리즘 수업 - 선택 정렬 1
 * - 문제 링크 : https://www.acmicpc.net/problem/23881
 * - 문제 : K 번째 교환되는 두 개의 수를 작은 수부터 한 줄에 출력한다. 교환 횟수가 K 보다 작으면 -1을 출력한다.
 */

const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [_, K] = input[0].split(" ");
const A = input[1].split(" ").map(Number);

function solution(A, k) {
	let answer = -1;
	let count = 0;
	const N = A.length;
	for (let last = N; last >= 2; last--) {
		let maxIndex = 0;
		for (let i = 1; i < last; i++) {
			if (A[i] > A[maxIndex]) {
				maxIndex = i;
			}
		}

		if (last - 1 !== maxIndex) {
			[A[last - 1], A[maxIndex]] = [A[maxIndex], A[last - 1]];
			count += 1;
		}

		if (count === k) {
			answer = `${A[maxIndex]} ${A[last - 1]}`;
			break;
		}
	}
	return answer;
}

console.log(solution(A, Number(K)));
