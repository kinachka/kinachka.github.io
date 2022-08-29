
let num = prompt();

let arr = [];

for (let i = 1; i < 10; i++) {
    arr[i] =  (0.1 * i * num).toFixed(); 
}
console.log(arr);
console.log(num);
document.write("/autoreply div: ",num,", 0,1: ",arr[1],", 0,2: ",arr[2],", 0,3: ",arr[3],", 0,4: ",arr[4],", 0,5: ",arr[5],", 0,6: ",arr[6],", 0,7: ",arr[7],", 0,8: ",arr[8],", 0,9: ",arr[9]);