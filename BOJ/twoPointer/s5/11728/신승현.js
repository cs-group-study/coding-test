/**
 * # 11728 - 배열 합치기
 * - 문제 링크 : https://www.acmicpc.net/problem/11728
 * - 문제 : 정렬되어있는 두 배열 A와 B가 주어진다. 두 배열을 합친 다음 정렬해서 출력하는 프로그램을 작성하시오.
 */

const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const [tcA, tcB] = input;

function solution(A, B) {
	const answerArr = A.concat(B).sort((a, b) => a - b);

	return answerArr.join(" ");
}

console.log(solution(tcA.split(" ").map(Number), tcB.split(" ").map(Number)));
