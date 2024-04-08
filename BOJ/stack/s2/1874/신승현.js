/**
 * # 1874 - 스택 수열
 * - 문제 링크 : https://www.acmicpc.net/problem/1874
 * - 문제 : 입력된 수열을 만들기 위해 필요한 연산을 한 줄에 한 개씩 출력한다. push연산은 +로, pop 연산은 -로 표현하도록 한다. 불가능한 경우 NO를 출력한다.
 * 스택에 push하는 순서는 반드시 오름차순을 지키도록 한다고 하자.
 */

const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, ...arr] = input;

const array = arr.map(Number);

function solution(n, arr) {
	const stack = [];
	const answer = [];
	const array = Array.from({ length: n }, (_, i) => i + 1);
	let index = 0;

	for (let i = 0; i < n; i++) {
		const target = arr[i]; // 입력된 수열에서 숫자 하나씩 뽑음

		// while문 돌며 1부터 n까지의 수의 배열의 값을 stack에 push
		while (target > index) {
			stack.push(array[index]);
			answer.push("+");
			index += 1;
		}

		// 값을 pop하고 pop한 숫자와 입력된 수열의 숫자와 같지 않다면, 불가능한 경우이므로 NO 출력
		const popNumber = stack.pop();
		answer.push("-");
		if (target !== popNumber) {
			return "NO";
		}
	}
	return answer.join("\n");
}

console.log(solution(N, array));
