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
