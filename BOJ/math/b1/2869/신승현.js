/**
 * # 2869 - 달팽이는 올라가고 싶다. - 수학
 * - 문제 링크 : https://www.acmicpc.net/problem/2869
 * - 문제 : 땅 위에 달팽이가 있다. 이 달팽이는 높이가 V미터인 나무 막대를 올라갈 것이다/ 달팽이는 낮에 A미터 올라갈 수 있다. 하지만, 밤에 잠을 자는 동안 B미터 미끄러진다. 또,정상에 올라간 후에는 미끄러지지 않는다.
 * 첫째 줄에 달팽이가 나무 막대를 모두 올라가는데 며칠이 걸리는지 출력한다.
 */

const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [A, B, V] = input[0].split(" ").map(Number);

function solution(up, down, total) {
	let answer = Math.floor((total - down - 1) / (up - down)) + 1;

	return answer;
}

console.log(solution(A, B, V));
