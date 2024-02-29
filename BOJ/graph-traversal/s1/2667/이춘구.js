/*
 * #2667 - 단지번호 붙이기
 * - 링크: https://www.acmicpc.net/problem/2667
 * - 문제
 * 정사각형 모양의 지도가 있다. 1은 집이 있는 곳을, 0은 집이 없는 곳을 나타낸다.
 * 이 지도를 가지고 연결된 집의 모임인 단지를 정의하고, 단지에 번호를 붙이려 한다.
 * 여기서 연결되었다는 것은 어떤 집이 좌우, 혹은 아래위로 다른 집이 있는 경우를 말한다.
 * 대각선상에 집이 있는 경우는 연결된 것이 아니다. 지도를 입력하여 단지수를 출력하고,
 * 각 단지에 속하는 집의 수를 오름차순으로 정렬하여 출력하는 프로그램을 작성하시오.
 */

const readFileSync = require("fs").readFileSync;
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [sideLength, ...rows] = readFileSync(filePath).toString().split("\n");
sideLength = +sideLength;

/*
 * 1. DFS
 */

// const EMPTY = 0; 사용되지 않지만 의미상 남겨놓음
const HOUSE = 1;
const VISITED = 2;

const map = rows.map((row) => row.split("").map(Number));
// 단지당 집의 개수를 넣을 배열
const houseCounts = [];

// 지도의 모든 좌표를 순회한다.
for (let row = 0; row < sideLength; row += 1) {
	for (let col = 0; col < sideLength; col += 1) {
		// 현 좌표에 집이 있다면
		if (map[row][col] === HOUSE) {
			// 해당 집을 시작으로 단지 내 집의 개수를 세어 houseCounts에 넣는다.
			const houseCount = countHousesInComplexStartingFrom([row, col]);
			houseCounts.push(houseCount);
		}
	}
}

/**
 * DFS(stack)로 `house`가 속한 단지에 있는 집의 개수를 센다.
 * @param {[number, number]} house 셈을 시작할 집의 위치
 * @returns `house`와 같은 단지에 있는 집의 개수
 */
function countHousesInComplexStartingFrom(house) {
	// 방문할 첫 집으로 house를 넣고, 집의 개수인 houseCount를 0으로 초기화한다.
	const willVisit = [house];
	let houseCount = 0;

	// 더이상 방문할 좌표가 없을 때까지 아래의 과정을 반복한다.
	while (willVisit.length !== 0) {
		// 방문할 좌표를 하나 꺼낸다.
		const [row, col] = willVisit.pop();

		// 해당 좌표에 집이 있다면
		if (map[row][col] === HOUSE) {
			// 집의 개수를 하나 증가시키고, 해당 집의 좌표에 방문했음을 표시한다.
			houseCount += 1;
			map[row][col] = VISITED;

			// 해당 좌표의 상하좌우에 붙어있는 집들의 좌표를 구해서
			const houses = searchHousesAround([row, col]);
			// 방문할 좌표의 배열에 넣는다.
			willVisit.push(...houses);
		}
	}

	// 집의 개수를 반환한다.
	return houseCount;
}

/**
 * `house`와 상하좌우로 연결된 집들의 좌표를 반환한다.
 * @param {[number, number]} house 중심이 되는 집의 좌표
 * @returns 상하좌우로 연결된 집들의 좌표가 담긴 배열
 */
function searchHousesAround(house) {
	const [row, col] = house;
	// 주변의 집을 담을 배열을 선언한다.
	const houses = [];
	// 상하좌우에 따른 좌표의 변화량을 담은 객체를 만든다.
	const directionDelta = {
		up: [-1, 0],
		right: [0, 1],
		down: [1, 0],
		left: [0, -1],
	};

	// 중심의 집을 기준으로 상하좌우의 좌표를 순회하며
	for (const [rowDelta, colDelta] of Object.values(directionDelta)) {
		// 목적지의 좌표를 계산한다.
		const destRow = row + rowDelta;
		const destCol = col + colDelta;

		// prettier-ignore
		// 해당 좌표가 지도의 좌표 범위 내에 존재하는지 확인한다.
		const isInMap = 
      0 <= destRow && destRow < sideLength
      && 
      0 <= destCol && destCol < sideLength;

		// 좌표 범위를 벗어난다면 다음 좌표로 넘어간다.
		if (!isInMap) continue;

		// 해당 좌표에 위치한 게 집이라면 좌표를 houses 배열에 넣는다.
		const isHouse = map[destRow][destCol] === HOUSE;
		if (isHouse) houses.push([destRow, destCol]);
	}

	// 집들의 좌표를 반환한다.
	return houses;
}

// 집의 개수는 단지를 기준으로 세었으므로, houseCounts의 길이가 단지의 개수이다.
// 집의 개수는 오름차순 정렬하여 출력한다.
console.log(
	houseCounts.length + "\n" + houseCounts.sort((a, b) => a - b).join("\n"),
);
