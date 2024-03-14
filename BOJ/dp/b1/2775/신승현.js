/**
 * dp
 * 2775 - 부녀회장이 될테야
 * 문제 링크 : https://www.acmicpc.net/problem/2775
 * 문제 :
 * 아파트에 비어있는 집은 없고 모든 거주민들이 이 계약 조건을 지키고 왔다고 가정했을 때, 주어지는 양의 정수 k와 n에 대해 k층에 n호에는 몇 명이 살고 있는지 출력하라. 단, 아파트에는 0층부터 있고 각층에는 1호부터 있으며, 0층의 i호에는 i명이 산다.
 * 조건* : “a층의 b호에 살려면 자신의 아래(a-1)층의 1호부터 b호까지 사람들의 수의 합만큼 사람들을 데려와 살아야 한다”
 */

const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const TC = input.map(Number);

function solution(tc) {
	const tcLength = tc.shift();

	let answer = [];

	for (let i = 0; i < tcLength; i++) {
		let a = tc.shift(); // 층
		let b = tc.shift(); // 호

		// 아파트 apart[층][호] 2차원 배열
		const apart = Array.from(Array(a + 1), () => Array(b + 1).fill(0));

		// 아파트 로직 생성 a층 b호 (b호의 경우 b명 산다.)
		for (let i = 1; i <= b; i++) {
			apart[0][i] = i;
		}

		for (let i = 1; i <= a; i++) {
			// 층
			for (let j = 1; j <= b; j++) {
				// 호
				apart[i][j] = apart[i - 1][j] + apart[i][j - 1];
			}
		}
		answer.push(apart[a][b]);
	}

	return answer.join("\n");
}

console.log(solution(TC));
