//  문제 번호: https://www.acmicpc.net/problem/11650
const readFileSync = require("fs").readFileSync;
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = readFileSync(filePath).toString().trim().split("\n");

const [count, ...arr] = input;

const newArr = [];
arr.forEach((el) => {
	newArr.push(el.split(" ").map(Number));
});

newArr.sort((a,b)=>{
    if(a[0]==b[0]){
        return a[1]-b[1]
    }else{
        return a[0]-b[0]
    }
})

const ans=[];

for(let i=0; i<count;i++){
    let answer = newArr[i].join(" ")
    ans.push(answer)
}
console.log(ans.join("\n")
)