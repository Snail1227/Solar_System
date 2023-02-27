import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  const discovered = {};
  let maxYear = null;
  let maxCount = 0;

  for (const asteroid of data.asteroids) {
    const year = asteroid.discoveryYear;
    if (year in discovered) {
      discovered[year]++;
    } else {
      discovered[year] = 1;
    }

    if (discovered[year] > maxCount) {
      maxCount = discovered[year];
      maxYear = year;
    }
  }

  return maxYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
