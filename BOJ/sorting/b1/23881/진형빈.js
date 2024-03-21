//  문제 번호: https://www.acmicpc.net/problem/23881
const readFileSync = require("fs").readFileSync;
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = readFileSync(filePath).toString().trim().split("\n");

const [nums, inputArr] = input;
const sampleArr = inputArr.split(" ").map(Number);
const [N, K] = nums.split(" ").map(Number);

const arr = [...sampleArr];
let count = 0;
let answer = -1;

function selectionSort(arr) {
	for (let i = N - 1; i > 0; i--) {
		let value = arr[0];
		let indexNum = 0;

		for (j = 1; j <= i; j++) {
			if (arr[j] > value) {
				value = arr[j];
				indexNum = j;
			}
		}

		if (arr[i] !== arr[indexNum]) {
			[arr[i], arr[indexNum]] = [arr[indexNum], arr[i]];
			count++;
		}

		if (count == K) {
			answer = `${arr[indexNum]} ${arr[i]}`;
		}
	}

	return answer;

}

console.log(selectionSort(arr));
