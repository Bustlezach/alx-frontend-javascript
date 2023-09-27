function handleResponseFromAPI(promise) {
  const myPromise = promise
    .then(() => ({
      status: 200,
      body: 'Success',
    }))
    .catch(() => Error())
    .finally(() => {
      console.log('Got a response from the API');
    });

  return myPromise;
}


export default handleResponseFromAPI;
