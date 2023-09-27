/* eslint-disable no-console */
/* global Promise console */
export default function getResponseFromAPI() {
  const myPromise = new Promise((resolve, reject) => {
    // Create a condition
    const student = true;
    if (student) {
      resolve('I am an ALX SE student.');
    } else {
      // Failed
      reject('Sorry, you are not an ALX student.');
    }
  });
  return myPromise;
}

getResponseFromAPI()
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.error(message);
  });

