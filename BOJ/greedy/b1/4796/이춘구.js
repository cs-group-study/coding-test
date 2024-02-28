/**
 * # 캠핑
 * 캠핑장을 연속하는 P일 중, L일동안만 사용할 수 있다. 강산이는 이제 막 V일짜리 휴가를 시작했다.
 * 강산이가 캠핑장을 최대 며칠동안 사용할 수 있을까? (1 < L < P < V)
 */

const readFileSync = require("fs").readFileSync;
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = readFileSync(filePath).toString().trim().split("\n");
const tcs = input.slice(0, -1);

const answer = tcs
	.map((tc, i) => {
		const [limit, period, vacation] = tc.split(" ").map(Number);
		const unit = Math.floor(vacation / period);
		const rest = (remainder = vacation % period) > limit ? limit : remainder;

		return `Case ${i + 1}: ${limit * unit + rest}`;
	})
	.join("\n");

console.log(answer);
