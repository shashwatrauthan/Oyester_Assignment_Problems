let arr = [2,2,2,2,4,4,4,4,5];
arr.sort();
let largest = 1;
let counter = largest;
let type = 0;
for (let i = 0; i < arr.length; i++) {
    largest = (arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i])) + 1;
    if (largest > counter) {
        counter = largest;
        type = arr[i];
    }
}

arr.sort().reverse();
let smallest = 1;
let sm_counter = smallest;
let sm_type = 0;
for (let i = 0; i < arr.length; i++) {
    smallest = (arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i])) - 1;
    if (smallest < sm_counter) {
        sm_counter = smallest;
        sm_type = arr[i];
    }
}

console.log([type,sm_type]);
