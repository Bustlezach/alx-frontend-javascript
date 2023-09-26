export default function concatArrays(array1, array2, string) {
    const conc = [...array1, ...array2, ...string];
    return conc;
}
