/**
 * 구현 - 수학
 * 4673 - 셀프 넘버
 * 문제 링크 : https://www.acmicpc.net/problem/4673
 * 문제 :
 * 10000보다 작거나 같은 셀프 넘버를 한 줄에 하나씩 출력하는 프로그램을 작성하시오
 * 셀프넘버* : 양의 정수 n에 대해서 d(n)을 n과 n의 각 자리수를 더하는 함수라고 정의하자. 예를 들어, d(75) = 75+7+5 = 87이다.
 */

const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

function d(n) {
	let dn = n;

	while (n > 0) {
		dn += n % 10;
		n = parseInt(n / 10);
	}

	return dn;
}

function solution() {
	let selfNumberArr = Array.from({ length: 10000 }, (_, i) => i + 1);

	for (let i = 0; i < 10000; i++) {
		let selfNumber = d(i);

		if (selfNumber <= 10000) {
			selfNumberArr[selfNumber] = 0;
		}
	}

	let answer = [];
	selfNumberArr.forEach((v, i) => {
		if (v !== 0) {
			answer.push(i);
		}
	});

	return answer;
}

console.log(solution().join("\n"));
