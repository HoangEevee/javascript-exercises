const removeFromArray = function(array, element) {
    let args = Array.from(arguments);
    let oldArray = args.shift();
    let newArray = [];
    for (const element of oldArray) {
        if (!(args.includes(element))) {
            newArray.push(element);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
