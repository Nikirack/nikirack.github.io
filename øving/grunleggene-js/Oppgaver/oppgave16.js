let array = [];
let overFem = 0;
let nøyaktigTi = 0;
let høyesteTall = 0;
let minsteTall = 1000000;

for (let index = 0; index < 10; index++) {
    array.push(Math.floor(Math.random() * 1000001));
    if (array[index] > 5) {
        overFem++;
    }
    if (array[index] == 10) {
        nøyaktigTi++;
    }
    if (array[index] > høyesteTall) {
        høyesteTall = array[index];
    } else if (array[index] < minsteTall) {
        minsteTall = array[index];
    }

}

console.log(array);
console.log(overFem);
console.log(nøyaktigTi);
// console.log(array.reduce((a, currentVal) => a + currentVal,0,))
console.log(høyesteTall);
console.log(minsteTall);

total = 0;
for (const element of array) {
    total = total + element;
}

console.log(total);
console.log(total / 10);