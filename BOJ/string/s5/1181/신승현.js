/**
 * # 1181 - 단어정렬 - 문자열
 * - 문제 링크 : https://www.acmicpc.net/problem/1181
 * - 문제 : 알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.
 * 조건 : 길이가 짧은 것부터, 길이가 같으면 사전 순으로단, 중복된 단어는 하나만 남기고 제거해야 한다.
 * TODO: sort시 a < b로 비교할 것
 * if(a - b > 0) vs if(a > b)
 * 'a' - 'b' 시 'a', 'b' 숫자로 형변환 => 파싱 중 에러 => NaN 반환 => NaN - NaN
 */

const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [_, ...arr] = input;

function solution(array) {
	const deletedArr = Array.from(new Set([...array]));

	const answer = deletedArr.sort((a, b) => {
		// 조건. 사전 순
		if (a.length === b.length) {
			if (a < b) return -1;
			else if (a > b) return 1;
			else return 0;
		}

		// 조건. 길이가 짧은 것부터
		return a.length - b.length;
	});
	return answer.join("\n");
}

console.log(solution(arr));
