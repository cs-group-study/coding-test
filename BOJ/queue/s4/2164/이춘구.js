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

const readFileSync = require("fs").readFileSync;
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const N = +readFileSync(filePath).toString();

/*
 * 풀이 1. Queue 직접 구현
 */

class Queue {
	// queue로 사용할 객체를 만든다. 인덱스를 key로 사용한다.
	#queue = {};
	// head: 꺼내는 쪽의 인덱스
	// tail: 넣는 쪽의 인덱스
	#head = 0;
	#tail = 0;

	constructor(initialQueue) {
		// queue로 사용할 초기 배열이 들어왔다면
		if (initialQueue) {
			// 초기 큐로 사용하기 위해 객체로 변환한다.
			this.#queue = initialQueue.reduce((prev, curr, index) => {
				prev[index] = curr;
				return prev;
			}, {});
			// tail 인덱스를 초기값으로 들어온 배열의 길이만큼 증가시킨다.
			this.#tail += initialQueue.length;
		}
	}

	// queue에 값을 넣는 메서드
	enqueue(value) {
		// 현재 tail 인덱스를 key, 인자로 들어온 값을 value로 넣는다.
		this.#queue[this.#tail] = value;
		// tail 인덱스를 1 증가시킨다.
		this.#tail += 1;
	}

	// queue에서 값을 꺼내는 메서드
	dequeue() {
		// queue가 비어있으면 undefined를 반환한다.
		if (this.length() === 0) return undefined;

		// queue 객체에서 head가 key인 값을 변수에 저장해두고,
		// 해당 프로퍼티를 삭제한다.
		const dequeuedValue = this.#queue[this.#head];
		delete this.#queue[this.#head];

		// head 인덱스를 1 증가시킨다.
		this.#head += 1;

		// head와 tail이 일치한다면 queue에 더이상 값이 없다는 뜻이므로,
		// 두 인덱스를 0으로 초기화한다.
		if (this.#head === this.#tail) {
			this.#head = 0;
			this.#tail = 0;
		}

		// 저장해 둔 값을 반환한다.
		return dequeuedValue;
	}

	length() {
		// tail에서 head를 뺀 값이 현재 queue의 길이이다.
		return this.#tail - this.#head;
	}

	print() {
		return Object.values(this.#queue);
	}
}

const cards = new Queue([...new Array(N)].map((_, i) => i + 1));

// cards가 하나 남을 때까지 아래의 과정을 반복한다.
while (cards.length() > 1) {
	// console.log(cards.print());
	// queue의 맨 앞의 카드 하나를 꺼내서 버린다.
	cards.dequeue();
	// 다시 맨 앞의 카드 하나를 꺼내서 맨 뒤에 넣는다.
	const movingCard = cards.dequeue();
	cards.enqueue(movingCard);
}

// 마지막으로 남은 카드를 꺼내서 logging한다.
console.log(cards.dequeue());

/*
 * 풀이 2. 규칙 도출
 *
 * N   : 1 | 2 | 3 4 | 5 6 7 8 | 9 10 11 12 13 14 15 16 | 17 18 ...
 * 답  : 1 | 2 | 2 4 | 2 4 6 8 | 2  4  6  8 10 12 14 16 |  2  4 ...
 * log2: 0 | 1 | 1 2 | 2 2 2 3 | 3  3  3  3  3  3  3  4 |  4  4 ...
 *
 * 답을 보면 일정한 규칙을 갖고 전개됨을 알 수 있다.
 * N이 2의 거듭제곱수(2^x)일 때 답은 N이며,
 * N + 1부터 다음 2의 거듭제곱수(2^(x + 1))까지의 답은 첫째 항과 공차가 2인 등차수열이다.
 * 그러므로 주어진 N에 대해 2^x < N <= 2^(x + 1)를 만족하는 x를 찾기 위해,
 * 2^x < N <= 2^(x + 1)의 양변에 로그를 취해 x < log2(N) <= x + 1로 만들면,
 * log2(N)을 내림하여 x를 구할 수 있다.
 * 그후 2^x로부터 N이 몇번째에 위치하는지 계산해서 2를 곱하면 답을 구할 수 있다.
 */

// N의 이진로그 값을 구한다.
const base2Log = Math.log2(N);
// 정수라면 2의 거듭제곱수이므로 N이 답이며,
// 아니라면 내림하며 N보다 작은 2의 거듭제곱수
const answer = Number.isInteger(base2Log)
	? N
	: (N - 2 ** Math.floor(base2Log)) * 2;

console.log(answer);
