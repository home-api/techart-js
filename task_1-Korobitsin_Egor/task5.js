function averageOfEven(array) {
    var oddElementsCount = 0,
        oddElementsSum = 0,
        element;
    for (var i = 0; i < array.length; i++) {
        element = array[i];
        if (element % 2 == 1) {
            oddElementsCount++;
            oddElementsSum += element;
        }
    }
    return oddElementsSum / oddElementsCount;
}