/**
 * # 11650 - 좌표 정렬하기
 * - 문제 링크 : https://www.acmicpc.net/problem/11650
 * - 문제 : 2차원 평면 위의 점 N개가 주어진다. 좌표를 x좌표가 증가하는 순으로, x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.
 */

const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [_, ...arr] = input;

const array = [];
arr.forEach((ele) => {
	array.push(ele.split(" ").map(Number));
});

function solution(array) {
	array.sort((a, b) => {
		const [x1, y1] = a;
		const [x2, y2] = b;

		if (x1 === x2) {
			// 첫 번째 x의 수가 같으면,
			return y1 - y2; // 두 번째 y좌표 오름차순
		} else {
			return x1 - x2; // 첫 번째 x좌표 오름차순
		}
	});

	let answer = "";

	array.map((ele) => {
		answer += `${ele[0]} ${ele[1]}\n`;
	});
	console.log(answer);
}

solution(array);
