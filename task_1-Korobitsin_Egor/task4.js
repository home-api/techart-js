function map(array, someFunction) {
    var newArray = [];
    for (var i = 0; i < array.length; i ++) {
        var newElement = someFunction(array[i]);
        newArray.push(newElement);
    }
    return newArray;
}