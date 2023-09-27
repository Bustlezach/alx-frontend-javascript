function handleResponseFromAPI(promise) {
  const myPromise = new Promise((resolve) => {
    if (promise) {
      resolve({
        status: 200,
        body: 'Success'
      });
    }
  });
  myPromise
    .then(response => {
      console.log('Got a response from the API');
    })
    .catch((response) => Error(response))
    .finally((response) => {
      console.log('Got a response from the API')
    })

  return myPromise;
}

export default handleResponseFromAPI;
