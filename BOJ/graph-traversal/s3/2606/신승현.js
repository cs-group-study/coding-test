/**
 * DFS
 * 2606 -  바이러스
 * 문제 링크 : https://www.acmicpc.net/problem/2606
 * 문제 :
 * 1번 컴퓨터가 웜 바이러스에 걸렸을 때, 1번 컴퓨터를 통해 웜 바이러스에 걸리게 되는 컴퓨터의 수를 첫째 줄에 출력한다.
 */

const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [computers, __, ...connections] = input;

// 간선(네트워크)의 정보를 통해 그래프 생성
const connectionMap = connections.reduce((connectionMap, connection) => {
	const [computer1, computer2] = connection.split(" ").map(Number);

	// 연결에 방향성이 없으므로 상호 기록한다. - 양방향 그래프
	if (connectionMap[computer1]) connectionMap[computer1].push(computer2);
	else connectionMap[computer1] = [computer2];

	if (connectionMap[computer2]) connectionMap[computer2].push(computer1);
	else connectionMap[computer2] = [computer1];

	return connectionMap;
}, {});

// 방문하지(감염) 않은 컴퓨터의 번호
let visited = Array.from({ length: Number(computers) + 1 }, () => false);
let answer = 0; // 감염된 컴퓨터 수

function dfs(graph, start) {
	visited[start] = true;
	connectionMap[start]?.forEach((connectedComputer) => {
		if (!visited[connectedComputer]) {
			dfs(graph, connectedComputer);
			answer += 1;
		}
	});
}

// 1번 컴퓨터부터 시작
dfs(connectionMap, 1);
console.log(answer);
