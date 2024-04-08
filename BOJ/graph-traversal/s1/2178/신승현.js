const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const miro = [];

// 상하좌우 x y 축
const move = {
	up: [0, -1],
	down: [0, 1],
	left: [-1, 0],
	right: [1, 0],
};

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

input.forEach((v) => {
	miro.push(v.split("").map(Number));
});

function bfs(graph, targetX, targetY) {
	let countMove = 1;
	const queue = [[0, 0]]; // 좌표 및 움직인 칸 수

	while (queue.length > 0) {
		const [x, y] = queue.shift();
		console.log("@@@", x, y, countMove);

		for (let i = 0; i < 4; i++) {
			const nx = x + dx[i]; // 다음 이동 x 좌표
			const ny = y + dy[i]; // 다음 이동 y 좌표

			if (targetX === nx && targetY === ny) return countMove + 1;

			if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue; // miro 벗어나면 pass

			if (graph[nx][ny] > 0) {
				graph[x][y] = 0;
				queue.push([nx, ny]);

				countMove += 1;
			}
		}
	}
}

console.log(bfs(miro, 6, 6));
