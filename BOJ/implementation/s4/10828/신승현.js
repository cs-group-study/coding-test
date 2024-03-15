/**
 * 구현 - 스택
 * 10828 - 스택
 * 문제 링크 : https://www.acmicpc.net/problem/10828
 * 문제 :
 * 정수를 저장하는 스택을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.
 * 첫째 줄에 주어지는 명령의 수 N (1 ≤ N ≤ 10,000)이 주어진다. 둘째 줄부터 N개의 줄에는 명령이 하나씩 주어진다. 주어지는 정수는 1보다 크거나 같고, 100,000보다 작거나 같다. 문제에 나와있지 않은 명령이 주어지는 경우는 없다.
 */

const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [count, ...orders] = input;

const answer = [];
const stack = [];

function orderFn(orderN) {
	const [order, number] = orderN.split(" ");

	switch (order) {
		case "push":
			stack.push(number);
			break;
		case "top":
			answer.push(stack[stack.length - 1] || -1);
			break;
		case "size":
			answer.push(stack.length);
			break;
		case "empty":
			answer.push(stack.length ? 0 : 1);
			break;
		case "pop":
			answer.push(stack.pop() || -1);
			break;
	}
}

function solution(count, orders) {
	for (let i = 0; i < count; i++) {
		orderFn(orders[i]);
	}

	return answer;
}
console.log(solution(count, orders).join("\n"));
