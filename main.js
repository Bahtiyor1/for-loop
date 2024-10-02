let array = [2, 4, 9, 10, 45, 67, 8, 90, 64, 78];
console.log(array)
for (let i = 0; i < array.length; i++) {
    let result = [];
    if (array[i] % 2 === 0) {
        result = array[i];
        console.log(result); 
    }
}


