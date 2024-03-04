/*
 * #9012 - 괄호
 * - 링크: https://www.acmicpc.net/problem/9012
 * - 문제
 * 입력으로 주어진 괄호 문자열의 VPS(Valid Parenthesis String) 여부를
 * 판단해서 그 결과를 YES와 NO로 나타내어야 한다.
 */

const readFileSync = require("fs").readFileSync;
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [_, ...tcs] = readFileSync(filePath).toString().trim().split("\n");

// 괄호와 그의 짝
const OPENING_PARENTHESIS = "(";
const CLOSING_PARENTHESIS = ")";
const pair = {
	[OPENING_PARENTHESIS]: CLOSING_PARENTHESIS,
	[CLOSING_PARENTHESIS]: OPENING_PARENTHESIS,
};

// 결과 문자열
const RESULT = {
	true: "YES",
	false: "NO",
};

// 결과를 담을 배열
const answers = [];

// 테스트 케이스를 순회하며 VPS인지 검사하고 그에 따른 결과를 answers에 push
tcs.forEach((tc) => {
	answers.push(RESULT[isVps(tc)]);
});

// 답 출력
console.log(answers.join("\n"));

/**
 * 괄호 문자열의 VPS(Valid Parenthesis String) 여부를 검사한다.
 *
 * @param {string} parenthesisString 괄호 문자열
 * @returns {boolean} VPS 검사 결과
 */
function isVps(parenthesisString) {
	const stack = [];
	const parenthesises = parenthesisString.split("");

	for (const currentParenthesis of parenthesises) {
		// stack이 비어있으면 여는 괄호가 이전에 없었다는 의미이므로,
		// 현재 괄호가 닫는 괄호일시 유효하지 않은 괄호 문자열이다.
		if (stack.length === 0 && currentParenthesis === CLOSING_PARENTHESIS) {
			return false;
		}

		// 스택의 최상위 괄호
		const lastParenthesis = stack.at(-1);

		// 현재 괄호의 짝이 스택의 최상위 괄호와 일치한다면 해당 괄호를 pop하고,
		// 일치하지 않는다면 현재 괄호를 stack에 push한다.
		if (pair[currentParenthesis] === lastParenthesis) stack.pop();
		else stack.push(currentParenthesis);
	}

	// 순회를 마친 뒤, 스택이 비어있다면
	// 모든 괄호가 짝이 맞는다는 의미이므로 true,
	// 아니라면 false를 반환한다.
	return stack.length === 0 ? true : false;
}
