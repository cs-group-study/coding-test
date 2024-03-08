/* 
 
*/ 
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\r\n");


const realInput = input.slice(0, -1)
const answer = realInput.map((a, i) => {
    const [L, P, V] = a.split(' ').map(Number);
    let share = Math.floor(V / P)
    let remain = V%P > L ? L : V%P;
    return `Case ${i + 1}: ${L * share + remain}`
}).join("\n")
console.log(answer)
