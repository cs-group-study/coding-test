/*
 * # 2164 - 카드2
 * 링크: https://www.acmicpc.net/problem/2164
 * 문제: N장의 카드가 있다.
 * 각각의 카드는 차례로 1부터 N까지의 번호가 붙어 있으며,
 * 1번 카드가 제일 위에, N번 카드가 제일 아래인 상태로 순서대로 카드가 놓여 있다.
 * 카드가 한 장 남을 때까지 아래의 동작을 반복하게 된다.
 * 1. 제일 위에 있는 카드를 바닥에 버린다.
 * 2. 제일 위에 있는 카드를 제일 아래에 있는 카드 밑으로 옮긴다.
 * N이 주어졌을 때, 제일 마지막에 남게 되는 카드를 구하는 프로그램을 작성하시오.
 */

const readFileSync = require("fs").readFileSync;
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const N = +readFileSync(filePath).toString();

/*
 * 풀이 1. Queue를 이용한 풀이
 */

class Queue {
	queue = {};
	#head = 0;
	#tail = 0;

	constructor(initialQueue) {
		this.queue = initialQueue.reduce((prev, curr, index) => {
			prev[index] = curr;
			return prev;
		}, {});
		this.#tail += initialQueue.length;
	}

	enqueue(value) {
		this.queue[this.#tail] = value;
		this.#tail += 1;
	}

	dequeue() {
		const dequeuedValue = this.queue[this.#head];
		delete this.queue[this.#head];

		this.#head += 1;

		if (this.#head === this.#tail) {
			this.#head = 0;
			this.#tail = 0;
		}

		return dequeuedValue;
	}

	length() {
		return this.#tail - this.#head;
	}
}

const cards = new Queue([...new Array(N)].map((_, i) => i + 1));

while (cards.length() !== 1) {
	cards.dequeue();
	const movingCard = cards.dequeue();
	cards.enqueue(movingCard);
}

console.log(cards.dequeue());

/*
 * 풀이 2
 */
// 버리고 밑으로 옮기는 과정을 N-2번 반복 후, cards.at(-1) 출력
// if (N <= 2) answer = cards.at(-1);
