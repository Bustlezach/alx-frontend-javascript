/* global Promise */
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Create a condition
    const student = true;
    if (student) {
      resolve('I am an ALX SE student.');
    } else {
      // Failed
      reject('Sorry, you are not an ALX student.');
    }
  });
}
