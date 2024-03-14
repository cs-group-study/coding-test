/**
 * dp
 * 2839 - 설탕 배달
 * 문제 링크 : https://www.acmicpc.net/problem/2839
 * 문제 :
 * 상근이가 설탕을 정확하게 N킬로그램 배달해야 할 때, 봉지 몇 개를 가져가면 되는지 그 수를 구하는 프로그램을 작성하시오.
 * 조건* :  최대한 적은 봉지를 들고 가려고 한다. 봉지는 3킬로그램 봉지와 5킬로그램 봉지가 있다.
 */

const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(n) {
	let count = 0;

	let ohK = parseInt(n / 5);
	let samK = 0;

	while (ohK >= 0) {
		if (n % 5 === 0) {
			return ohK;
		}

		let rest = n - ohK * 5;
		samK = parseInt(rest / 3);
		if (rest % 3 === 0) {
			count = ohK + samK;
			return count;
		}

		ohK -= 1;
	}

	return -1;
}

console.log(solution(Number(input[0])));

function dpSolution(n) {
	let sugar = Array(n + 1).fill(0);

	function dp(x) {
		if (x < 0) return 0;
		if (x === 3 || x === 5) return 1;

		if (sugar[x] !== 0) {
			return sugar[x];
		}

		return (sugar[x] = Math.min(dp(x - 3), dp(x - 5)) + 1);
	}

	for (let i = 1; i <= n; i++) {
		dp(n);
	}

	if (sugar[n] >= 6000) {
		return -1;
	} else {
		return sugar[n];
	}
}

console.log(dpSolution(Number(input[0])));
