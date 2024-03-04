/*
 * #4796 - 캠핑
 * - 링크: https://www.acmicpc.net/problem/4796
 * - 문제
 * 캠핑장을 연속하는 P일 중, L일동안만 사용할 수 있다.
 * 강산이는 이제 막 V일짜리 휴가를 시작했다.
 * 강산이가 캠핑장을 최대 며칠동안 사용할 수 있을까? (1 < L < P < V)
 */

const readFileSync = require("fs").readFileSync;
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = readFileSync(filePath).toString().trim().split("\n");

const tcs = input.slice(0, -1);

const answer = tcs
	.map((tc, i) => {
		const [limit, period, vacation] = tc.split(" ").map(Number);
		// 총 휴가일(vacation)에 연속하는 날(period)이 몇 단위 있는지 구한다.
		const unit = Math.floor(vacation / period);
		// `period * n`만큼 이용하고 남은 일수가
		// 한계 사용일(limit)보다 많이 남았다면
		// 한계 사용일 전부를, 아니라면 남은 일수만큼만 이용할 수 있다.
		const rest = (remainder = vacation % period) > limit ? limit : remainder;

		// (연속하는 P일 횟수 * 한계 사용일 + 나머지 사용 가능일수)를 계산해 반환한다.
		return `Case ${i + 1}: ${limit * unit + rest}`;
	})
	.join("\n");

console.log(answer);
