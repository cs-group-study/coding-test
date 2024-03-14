/**
 * 구현 - Queue
 * 2161 - 카드 1
 * 문제 링크 : https://www.acmicpc.net/problem/2161
 * 문제 :
 * N이 주어졌을 때, 버린 카드들을 순서대로 출력하고, 마지막에 남게 되는 카드를 출력하는 프로그램을 작성하시오.
 */

const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = Array.from({ length: Number(input[0]) }, (v, i) => i + 1).reverse();

function solution(cards) {
	const answer = [];

	while (cards.length > 0) {
		const topCard = cards.pop(); // 상단 카드 버리기
		answer.push(topCard);

		const moveToBottom = cards[cards.length - 1]; // pop한 값을 바로 unshift하면 무한 루프

		cards.unshift(moveToBottom);
		cards.pop();
	}

	return answer;
}

console.log(solution(arr).join(" "));
