/*
 * #2164 - 카드2
 * - 링크: https://www.acmicpc.net/problem/2164
 * - 문제
 * N장의 카드가 있다. 각각의 카드는 차례로 1부터 N까지의 번호가 붙어 있으며,
 * 1번 카드가 제일 위에, N번 카드가 제일 아래인 상태로 순서대로 카드가 놓여 있다.
 *
 * 카드가 한 장 남을 때까지 아래의 동작을 반복한다.
 * 1. 제일 위에 있는 카드를 바닥에 버린다.
 * 2. 제일 위에 있는 카드를 제일 아래에 있는 카드 밑으로 옮긴다.
 *
 * N이 주어졌을 때, 제일 마지막에 남게 되는 카드를 구하는 프로그램을 작성하시오.
 */

const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 시간 초과
function solution(cardNumber) {
	const cardArray = Array.from({ length: cardNumber }, (_, index) => index + 1);

	while (cardArray.length > 1) {
		cardArray.shift(); // 하나 버림
		cardArray.push(cardArray.shift()); // 제일 위 카드를 제일 아래로 이동

		if (cardArray.length === 1) {
			console.log(cardArray[0]);
		}
	}
}

// 메모리 초과
function solution2(cardNumber) {
	let cardArray = Array.from(
		{ length: cardNumber },
		(_, index) => index + 1,
	).reverse();

	while (cardArray.length > 1) {
		const stack = [];
		cardArray.pop();
		stack.push(cardArray.pop());

		cardArray = [...stack, ...cardArray];

		if (cardArray.length === 1) {
			console.log(cardArray[0]);
		}
	}
}

solution(Number(input[0]));
solution2(Number(input[0]));
