console.log('Starting...');

const badPromise = () => {
  return Promise.reject(new Error('this will stop in async_hooks.js'))
}

badPromise()
  .then(() => {
    console.log('This will never get hit.');
  })
  .catch((error) => {
    console.log(error.message);
    console.log('End');
  });