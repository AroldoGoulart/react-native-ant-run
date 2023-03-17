# Ant Racing Statistics App

## Overview

This is a small front-end coding challenge to build an app for viewing statistics related to competing ants and the races in which they compete. The goal of this project is to demonstrate your problem-solving skills using React Native.

## Challenge

Here are the specifications provided by our stakeholders:

- Information about competing ants must be acquired from either:
  - a GraphQL API located at the following endpoint: <https://sg-ants-test.herokuapp.com/graphql>
  - a REST API located at the following endpoint: <https://sg-ants-test.herokuapp.com/ants>
- Being a free-tier Heroku project, please give it a bit to spin back up in the event it's been idle for an extended period of time.
- All available information on the ants should be displayed in a pleasing UI designed at your discretion.
- You must provide a way for users to calculate the odds of each ant winning.
  - We have provided the function which provides the means to calculate the likelihood of an ant winning below, **_which you must use as-is_**
  - This means that the function, itself, cannot be altered in any way

## Ant-win likelihood algorithm

```jsx
function generateAntWinLikelihoodCalculator() {
  const delay = 7000 + Math.random() * 7000;
  const likelihoodOfAntWinning = Math.random();

  return callback => {
    setTimeout(() => {
      callback(likelihoodOfAntWinning);
    }, delay);
  };
}
```

## Must Haves

- Users must be able to tap a button that fetches the ant data
- When data has been fetched, User must be able to Start a Race, which triggers running calculations on all ants simultaneously.
- When data has been fetched, UI must reflect the state of each ant's win likelihood calculation (not yet run, in progress, calculated, etc.).
- When data has been fetched, UI must display the global state of the race (not yet run, in progress, all calculated).
- When a race is ongoing, as the results come in, the list of ants must be ordered by calculated likelihood of winning
  - highest
  - lowest
  - not yet calculated

## How to Run

To run this project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the root directory of the project.
3. Run `yarn install` to install the required dependencies.
4. Create a `.env` file in the root directory and add the following line: `BASE_URL=API_link`, where `API_link` is the endpoint of the GraphQL or REST API.
5. Run `yarn android` to run the app on an Android emulator, or `yarn ios` to run the app on an iOS emulator. Make sure you have the appropriate emulator set up.
6. Run `yarn start` to load the bundle.

## Conclusion

The goal of this project is to showcase your problem-solving skills and knowledge of React Native best practices. Please produce a codebase that, as closely as possible, reflects your production-level effort.
