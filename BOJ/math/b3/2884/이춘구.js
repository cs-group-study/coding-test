/*
 * #2884 - 알람 시계
 * - 링크: https://www.acmicpc.net/problem/2884
 * - 문제
 * 원래 설정되어 있는 알람을 45분 앞서는 시간으로 바꾼다.
 * 현재 설정한 알람 시각이 주어졌을 때, 이를 언제로 고쳐야 하는지 구하는 프로그램을 작성하시오.
 *
 * 첫째 줄에 두 정수 H와 M이 주어진다. (0 ≤ H ≤ 23, 0 ≤ M ≤ 59) 그리고 이것은 현재 설정한 알람 시간 H시 M분을 의미한다.
 * 입력 시간은 24시간 표현을 사용한다. 24시간 표현에서 하루의 시작은 0:0(자정)이고, 끝은 23:59(다음날 자정 1분 전)이다.
 * 시간을 나타낼 때, 불필요한 0은 사용하지 않는다.
 */

const readFileSync = require("fs").readFileSync;
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [hours, minutes] = readFileSync(filePath)
	.toString()
	.split(" ")
	.map(Number);

const MINS_TO_SET_EARLY = 45;

// 현재 연월일시를 가져온다.
const date = new Date();

// 시간과 분을 주어진 테스트 케이스로 변경한다.
date.setHours(hours, minutes);
// 변경된 분에서 45분을 뺀다.
date.setMinutes(date.getMinutes() - MINS_TO_SET_EARLY);

// 변경된 시간과 분을 출력한다.
console.log(date.getHours(), date.getMinutes());
