# Promise

- A Promise is an object that represents the eventual completion or failure of an asynchronous operation.
- Promise is used to handle asynchronous operations in JavaScript.

## Promise States

### Pending
- Initial state.
- The asynchronous operation is still in progress.

### Fulfilled
- The asynchronous operation completed successfully.
- The promise returns a value.

### Rejected
- The asynchronous operation failed.
- The promise returns an error.

## Real Life Example

- Ordering food from a restaurant.
- The waiter promises to bring the food later.
- While the food is being prepared → Pending
- Food arrives → Fulfilled
- Restaurant cannot prepare the food → Rejected 

## Why Promises?

Before Promises, callbacks were used to handle asynchronous operations.

Promises provide:
- Better readability
- Better error handling
- Avoid callback hell


### Example 1 : Creating a Promise
```
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Operation Successful");
  } else {
    reject("Operation Failed");
  }
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```
#### Output 
`Operation Successful`

### Example 2 : Simulating an API Call
```
const fetchJobs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      { company: "Google" },
      { company: "Amazon" }
    ]);
  }, 2000);
});

fetchJobs
  .then((jobs) => {
    console.log(jobs);
  })
  .catch((error) => {
    console.log(error);
  });
  ```

#### What Happens?
1. Promise is created.
2. State = Pending.
3. Waits 2 seconds.
4. resolve() is called.
5. State = Fulfilled.
6. .then() executes.

#### Output 
`Creating a Promise`

### Example 3: Rejected Promise
```
const fetchJobs = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Failed to fetch jobs");
  }, 2000);
});

fetchJobs
  .then((jobs) => {
    console.log(jobs);
  })
  .catch((error) => {
    console.log(error);
  });
```

#### Output 
`Failed to fetch jobs`