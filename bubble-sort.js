let bubblesort = arr => {
    var noSwap
    for (let i = arr.length; i > 0; i--) {
        noSwap = true
        for (let j = 0; j < i - 1; j++) {
            console.log(arr[j] , arr[j+1]);
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                noSwap = false
            }
        }
        if (noSwap) break;
    }
    return arr
}

console.log(bubblesort([1, 2, 3, 4, 5, 6, 7]))


//  here the complexcity will be O(n) in case it becomes noSwap but mostly it will be O(n^2)