/**
 * # 1417 - 국회의원 선거
 * - 문제 링크 : https://www.acmicpc.net/problem/1417
 * - 문제 : 다솜이는 사람들의 마음을 읽어서 자신을 찍지 않으려는 사람을 돈으로 매수해서 국회의원에 당선이 되게 하려고 한다. 다른 모든 사람의 득표수 보다 많은 득표수를 가질 때, 그 사람이 국회의원에 당선된다.
 * 다솜이가 매수해야하는 사람의 최솟값을 출력하는 프로그램을 작성하시오.
 */

const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, ...tc] = input;
const arr = tc.map(Number);

function solution(candidates) {
	let answer = 0;
	let dasom = candidates.shift();

	while (1) {
		let max = Math.max(...candidates);
		let maxIndex = candidates.findIndex((candidate) => candidate === max);
		if (dasom > max) {
			break;
		} else {
			dasom += 1;
			answer += 1;
			candidates[maxIndex] -= 1;
		}
	}

	return answer;
}

console.log(solution(arr));
