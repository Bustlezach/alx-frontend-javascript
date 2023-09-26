export default function appendToEachArrayValue(array, appendString) {
    const arr = [];
    for (let value in array) {
        arr.push(appendString + value);
    }

    return arr;
}
