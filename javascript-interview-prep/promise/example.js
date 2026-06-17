// Example 1 : Creating a Promise

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

// Output 
// `Operation Successful`

// Example 2 : Simulating an API Call

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

// Output 
// `Creating a Promise`

// Example 3: Rejected Promise
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

// Output 
// `Failed to fetch jobs`