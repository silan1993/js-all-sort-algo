let selectionsort = arr => {
    for (let i = 0; i <arr.length; i++) {
        let smallest = arr[i]
        let smallestIndex = i
            let swap = false
        for (let j = i + 1; j < arr.length; j++) {
            if (smallest > arr[j]) {
                smallest = arr[j]
                smallestIndex = j
                swap = true
            }
        }
        if(swap) [arr[i],arr[smallestIndex]]  = [arr[smallestIndex],arr[i]]
    }
    return arr
}

console.log(selectionsort([2,3,4,6,33,64,7434,67,34]))


//  here the complexcity will  it will be O(n^2)