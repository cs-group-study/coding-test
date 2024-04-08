/**
 * # 5800 - 성적 통계
 * - 문제 링크 : https://www.acmicpc.net/problem/5800
 * - 문제 : 첫째 줄에는 "Class X"를 출력한다. X는 반의 번호이며 입력으로 주어진 순서대로 1부터 증가한다.
 * 둘째 줄에는 가장 높은 점수, 낮은 점수, 성적을 내림차순으로 정렬했을 때 가장 큰 인접한 점수 차이를 예제 출력과 같은 형식으로 출력한다.
 */

const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution() {
	let answer = "";

	for (let i = 1; i <= input[0]; i++) {
		const [N, ...students] = input[i].split(" "); // N: 5
		const sortedArr = students.map(Number).sort((a, b) => a - b);

		let min = sortedArr[0];
		let max = sortedArr[N - 1];
		let largestGap = Number.MIN_SAFE_INTEGER;
		for (let j = 0; j < N - 1; j++) {
			largestGap = Math.max(sortedArr[j + 1] - sortedArr[j], largestGap);
		}

		answer += `Class ${i}\n`;
		answer += `Max ${max}, Min ${min}, Largest gap ${largestGap}\n`;
	}
	return answer;
}

console.log(solution());
