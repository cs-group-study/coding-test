/**
 * # 10809 - 알파벳 찾기
 * - 문제 링크 : https://www.acmicpc.net/problem/10809
 * - 문제 : 알파벳 소문자로만 이루어진 단어 S가 주어진다. 각각의 알파벳에 대해서, 단어에 포함되어 있는 경우에는 처음 등장하는 위치를, 포함되어 있지 않은 경우에는 -1을 출력하는 프로그램을 작성하시오.
 * String.fromCharCode() : 시퀀스로부터 문자열을 생성
 * String.prototype.charCodeAt() :
 * String.prototype.charAt() : 문자열에서 특정 인덱스에 위치하는 유니코드 반환
 * ex) String.fromCharCode(97) -> 'a'
 */

const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(word) {
	const answer = Array.from({ length: 26 }, () => -1);
	//charAt()

	return word;
}

function sol(word) {
	const alphaArr = [];
	for (let i = 97; i <= 122; i++) {
		let alpha = String.fromCharCode(i);
		alphaArr.push(alpha);
	}

	const answer = [];
	for (const alpha of alphaArr) {
		answer.push(word.indexOf(alpha));
	}

	return answer.join("\n");
}

console.log(sol(input[0]));
