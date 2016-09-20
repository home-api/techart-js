// insertion sort
function sort(array) {
    var newArray = array.slice();
    for (var i = 1; i < newArray.length; i++) {
        var insertValue = newArray[i];

        var indexToInsert = 0;
        for (var k = i - 1; k >= 0 && newArray[k] > insertValue; k--) {
            newArray[k + 1] = newArray[k];
        }

        newArray[indexToInsert] = insertValue;
    }
    return newArray;
}