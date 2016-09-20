// insertion sort
function sort(array) {
    var newArray = array.slice();
    for (var i = 1, length = newArray.length; i < length; i++) {
        var insertValue = newArray[i];

        var indexToInsert;
        for (var k = i - 1; k >= 0 && newArray[k] > insertValue; k--) {
            newArray[k + 1] = newArray[k];
            indexToInsert = k;
        }

        newArray[indexToInsert] = insertValue;
    }
    return newArray;
}