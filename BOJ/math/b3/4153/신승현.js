/**
 * # 4153 - 직각삼각형
 * - 문제 링크 : https://www.acmicpc.net/problem/4153
 * - 문제 : 각 입력에 대해 직각 삼각형이 맞다면 "right", 아니라면 "wrong"을 출력한다.
 *
 * 제곱 : Math.pow()
 * ex) Math.pow(4, 0.5) // 2
 */

const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.pop();
const arr = input.map((v) => v.split(" ").map(Number));

function solution(array) {
	const answer = [];

	array.forEach((lengths) => {
		const sortedLength = lengths.sort((a, b) => b - a);
		const [a, b, c] = sortedLength;

		if (a * a === b * b + c * c) {
			answer.push("right");
		} else {
			answer.push("wrong");
		}
	});

	return answer;
}

console.log(solution(arr).join("\n"));
