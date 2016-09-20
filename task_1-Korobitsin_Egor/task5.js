function averageOfEven(array) {
    var oddElementsCount = 0;
    var oddElementsSum = 0;
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (element % 2 == 1) {
            oddElementsCount++;
            oddElementsSum += element;
        }
    }
    return oddElementsSum / oddElementsCount;
}