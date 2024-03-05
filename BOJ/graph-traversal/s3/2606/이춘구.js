/*
 * #2606 - 바이러스
 * - 링크: https://www.acmicpc.net/problem/2606
 * - 문제
 * 한 컴퓨터가 웜 바이러스에 걸리면 그 컴퓨터와 네트워크 상에서
 * 연결되어 있는 모든 컴퓨터는 웜 바이러스에 걸리게 된다.
 * 컴퓨터의 수와 네트워크 상에서 서로 연결되어 있는 정보가 주어질 때,
 * 1번 컴퓨터를 통해 웜 바이러스에 걸리게 되는 컴퓨터의 수를 출력하는 프로그램을 작성하시오.
 */

const readFileSync = require("fs").readFileSync;
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [_, __, ...connections] = readFileSync(filePath).toString().split("\n");

// 각 컴퓨터들의 연결상태가 담긴 객체를 생성한다.
const connectionMap = connections.reduce((connectionMap, connection) => {
	const [computer1, computer2] = connection.split(" ").map(Number);

	// 연결에 방향성이 없으므로 상호 기록한다.
	if (connectionMap[computer1]) connectionMap[computer1].push(computer2);
	else connectionMap[computer1] = [computer2];

	if (connectionMap[computer2]) connectionMap[computer2].push(computer1);
	else connectionMap[computer2] = [computer1];

	return connectionMap;
}, {});

/*
 * 1-1. DFS - 스택
 */

// 감염 대상 컴퓨터의 번호가 담긴 배열
const willInfect = [1];
// index에 해당하는 컴퓨터의 감염 여부가 담긴 배열
const infected = [];
// 감염된 컴퓨터의 개수
let infecteeCount = 0;

// 더이상 감염시킬 컴퓨터가 없을 때까지 아래의 과정을 반복한다.
while (willInfect.length !== 0) {
	// 감염 대상 컴퓨터를 하나 꺼낸다.
	const computer = willInfect.pop();

	// 이미 감염된 컴퓨터라면 다음 컴퓨터로 넘어간다.
	if (infected[computer]) continue;

	// 해당 컴퓨터를 감염시키고, 감염된 컴퓨터의 개수를 1 증가시킨다.
	infected[computer] = true;
	infecteeCount += 1;

	// 해당 컴퓨터와 연결된 컴퓨터들을 감염 대상 컴퓨터 배열에 넣는다.
	// 연결된 컴퓨터가 없다면 빈 배열을 넣는다.
	willInfect.push(...(connectionMap[computer] || []));
}

// 1번이 전염시킨 컴퓨터의 개수를 출력하기 위해 1개를 뺀다.
console.log(infecteeCount - 1);

/*
 * 1-2. DFS - 재귀
 */

// 1번 컴퓨터부터 시작된 감염에 전염된 컴퓨터의 총 개수를 구하고,
// 1번이 전염시킨 컴퓨터의 개수만 출력하기 위해 1개를 뺀다.
console.log(infect(1, []) - 1);

/**
 * `computer`와 연결된 컴퓨터들을 감염시키고 감염된 컴퓨터의 개수를 반환한다.
 * @param {number} computer 감염 대상 컴퓨터의 번호
 * @param {[boolean]} infected 컴퓨터들의 감염 상태
 * @returns `computer`로부터 시작한 바이러스에 전염된 컴퓨터의 개수(`computer` 포함)
 */
function infect(computer, infected) {
	// `computer`가 이미 감염된 상태라면,
	// 새로 감염시킬 컴퓨터가 없으므로 0을 반환한다.
	if (infected[computer]) return 0;

	// `computer`를 감염시키고, 감염된 컴퓨터의 개수를 1 증가시킨다.
	infected[computer] = true;
	let infecteeCount = 1;

	// `computer`와 연결된 컴퓨터가 있다면 전염시키고,
	// 해당 컴퓨터가 전염시킨 컴퓨터의 개수를 `computer`가 전염시킨 개수에 더한다.
	connectionMap[computer]?.forEach((connectedComputer) => {
		infecteeCount += infect(connectedComputer, infected);
	});

	// `computer` 자신을 포함해서
	// `computer`로부터 시작된 바이러스에 전염된 컴퓨터의 총 개수를 반환한다.
	return infecteeCount;
}
