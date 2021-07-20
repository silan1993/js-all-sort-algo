let insertionsort = arr => {
    for (let i = 1; i < arr.length; i++) {
        const element = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > element; j--) {
            arr[j+1] = arr[j]
            
        }
        arr[j+1] =element
    }
    return arr
}


// here time complexcity is O(N) in worst case it will be O(N^2) if data is quadratic

insertionsort([2,3,56,7,9,6,5])