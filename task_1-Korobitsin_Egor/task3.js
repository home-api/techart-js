function filter(array, callback) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (callback(element)) {
            newArray.push(element);
        }
    }
    return newArray;
}