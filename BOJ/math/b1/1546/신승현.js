/**
 * # 1546 - 평균 - 수학
 * - 문제 링크 : https://www.acmicpc.net/problem/1546
 * - 문제 : 첫째 줄에 새로운 평균을 출력한다. 실제 정답과 출력값의 절대오차 또는 상대오차가 10^-2 이하이면 정답이다.
 */

const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input[0];
const score = input[1].split(" ").map(Number);

function eval(arr) {
	return arr.reduce((sum, cur) => sum + cur) / arr.length;
}

function newEval(max, num) {
	return (num / max) * 100;
}

function getMaxNumber(arr) {
	return Math.max(...arr);
}

function solution(length, scores) {
	const maxNumber = getMaxNumber(scores);
	const newArr = [];
	for (let i = 0; i < length; i++) {
		newArr.push(newEval(maxNumber, scores[i]));
	}

	return eval(newArr);
}

console.log(solution(N, score));
