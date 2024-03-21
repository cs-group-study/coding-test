/**
 * 구현 - 큐
 * 1158 - 요세푸스 문제
 * 문제 링크 : https://www.acmicpc.net/problem/1158
 * 문제 :
 * 1번부터 N번까지 N명의 사람이 원을 이루면서 앉아있고, 양의 정수 K(≤ N)가 주어진다. 이제 순서대로 K번째 사람을 제거한다. 한 사람이 제거되면 남은 사람들로 이루어진 원을 따라 이 과정을 계속해 나간다. 이 과정은 N명의 사람이 모두 제거될 때까지 계속된다.
 * N과 K가 주어지면 (N, K)-요세푸스 순열을 구하는 프로그램을 작성하시오.
 */

const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);

const answer = [];

function solution(N, K) {
	const yo = Array.from({ length: N }, (_, i) => i + 1);

	while (yo.length > 0) {
		for (let i = 0; i < K - 1; i++) {
			yo.push(yo.shift());
		}

		answer.push(yo.shift());
	}
	return answer;
}

function print(arr) {
	return `<${arr.join(", ")}>`;
}

console.log(print(solution(N, K)));
