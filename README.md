# SimpleScheduler

[![NPM Version](https://img.shields.io/npm/v/@rehmanmusharaf/simplescheduler.svg?style=flat-square)](https://www.npmjs.com/package/@rehmanmusharaf/simplescheduler)
[![License](https://img.shields.io/npm/l/@rehmanmusharaf/simplescheduler.svg?style=flat-square)](https://github.com/rehmanmusharaf/simplescheduler/blob/main/LICENSE)

**SimpleScheduler** is a lightweight task scheduling library for Node.js applications. It provides an easy way to schedule and manage tasks with human-friendly syntax, making it perfect for cron jobs, automated tasks, and recurring events.

## Features

- **Simple API**: Easy-to-use API for scheduling and managing tasks.
- **Human-Friendly Syntax**: Supports natural language intervals like '5 seconds', '2 minutes'.
- **Asynchronous Support**: Works seamlessly with asynchronous tasks.
- **One-Time and Recurring Tasks**: Schedule tasks to run once or at regular intervals.
- **Error Handling**: Robust error handling with console feedback for invalid intervals.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Basic Usage](#basic-usage)
  - [Scheduling Once](#scheduling-once)
  - [Clearing and Canceling Tasks](#clearing-and-canceling-tasks)
- [API Documentation](#api-documentation)
  - [scheduleTask](#scheduletask)
  - [scheduleOnce](#scheduleonce)
  - [parseInterval](#parseinterval)
  - [clearTasks](#cleartasks)
  - [cancelTask](#canceltask)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Installation

You can install the SimpleScheduler package using npm or yarn:

````bash
# Using npm
npm install @rehmanmusharaf/simplescheduler

# Using yarn
yarn add @rehmanmusharaf/simplescheduler
# SimpleScheduler

[![NPM Version](https://img.shields.io/npm/v/@rehmanmusharaf/simplescheduler.svg?style=flat-square)](https://www.npmjs.com/package/@rehmanmusharaf/simplescheduler)
[![License](https://img.shields.io/npm/l/@rehmanmusharaf/simplescheduler.svg?style=flat-square)](https://github.com/rehmanmusharaf/simplescheduler/blob/main/LICENSE)

**SimpleScheduler** is a lightweight task scheduling library for Node.js applications. It provides an easy way to schedule and manage tasks with human-friendly syntax, making it perfect for cron jobs, automated tasks, and recurring events.

## Features

- **Simple API**: Easy-to-use API for scheduling and managing tasks.
- **Human-Friendly Syntax**: Supports natural language intervals like '5 seconds', '2 minutes'.
- **Asynchronous Support**: Works seamlessly with asynchronous tasks.
- **One-Time and Recurring Tasks**: Schedule tasks to run once or at regular intervals.
- **Error Handling**: Robust error handling with console feedback for invalid intervals.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Basic Usage](#basic-usage)
  - [Scheduling Once](#scheduling-once)
  - [Clearing and Canceling Tasks](#clearing-and-canceling-tasks)
- [API Documentation](#api-documentation)
  - [scheduleTask](#scheduletask)
  - [scheduleOnce](#scheduleonce)
  - [parseInterval](#parseinterval)
  - [clearTasks](#cleartasks)
  - [cancelTask](#canceltask)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Installation

You can install the SimpleScheduler package using npm or yarn:

```bash
# Using npm
npm install @rehmanmusharaf/simplescheduler

# Using yarn
yarn add @rehmanmusharaf/simplescheduler

Usage
Basic Usage
Here's a simple example of how to use SimpleScheduler to schedule a recurring task:

const { scheduleTask } = require('@rehmanmusharaf/simplescheduler');

// Schedule a task to run every 5 seconds
const taskId = scheduleTask(() => {
  console.log('Task executed every 5 seconds');
}, '5 seconds');

Scheduling Once
Schedule a task to run only once after a specified interval:
const { scheduleOnce } = require('@rehmanmusharaf/simplescheduler');

// Schedule a task to run once after 2 minutes
const taskId = scheduleOnce(() => {
  console.log('Task executed after 2 minutes');
}, '2 minutes');
Clearing and Canceling Tasks
You can clear multiple tasks at once or cancel a specific task using its timer ID:
const { scheduleTask, clearTasks, cancelTask } = require('@rehmanmusharaf/simplescheduler');

// Schedule two tasks
const taskId1 = scheduleTask(() => console.log('Task 1'), '5 seconds');
const taskId2 = scheduleTask(() => console.log('Task 2'), '10 seconds');

// Clear multiple tasks
clearTasks([taskId1, taskId2]);

// Or cancel a specific task
cancelTask(taskId1);
API Documentation
scheduleTask
Schedules a task to run at specified intervals using human-friendly syntax.

Parameters:

task (Function): The function to execute at specified intervals.
interval (string): The time interval (e.g., '5 seconds', '2 minutes').
Returns:

NodeJS.Timeout | undefined: Returns the timer ID for further control if needed or undefined if the interval is invalid.
Example:
const taskId = scheduleTask(() => {
  console.log('Task executed every 10 seconds');
}, '10 seconds');

scheduleOnce
Schedules a task to run once after a specified interval using human-friendly syntax.

Parameters:

task (Function): The function to execute once after the specified interval.
interval (string): The time interval (e.g., '5 seconds', '2 minutes').
Returns:

NodeJS.Timeout | undefined: Returns the timer ID for possible cancellation or undefined if the interval is invalid.
Example:

const taskId = scheduleOnce(() => {
  console.log('Task executed after 1 minute');
}, '1 minute');
parseInterval
Parses the interval string into milliseconds.

Parameters:

interval (string): The interval to parse (e.g., '5 seconds', '2 minutes').
Returns:

number: The equivalent milliseconds or 0 if the interval is invalid.
Example:
const milliseconds = parseInterval('2 minutes');
console.log(milliseconds); // Output: 120000
clearTasks
Clears all scheduled tasks based on the provided array of timer IDs.

Parameters:

tasks (Array<NodeJS.Timeout>): An array of timer IDs to clear.
Example:
clearTasks([taskId1, taskId2]);

cancelTask
Cancels a scheduled task based on its timer ID.

Parameters:

timerId (NodeJS.Timeout): The timer ID to cancel.
Example:

cancelTask(taskId);
Contributing
Contributions are welcome! If you'd like to contribute to SimpleScheduler, please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix.
Implement your changes and add tests if necessary.
Submit a pull request with a clear description of your changes.
Please make sure your code adheres to the project's coding standards and passes all tests.


### Explanation of the Updated Sections

- **Human-Friendly Syntax**: Describes the syntax you are using to specify intervals, which makes it easy for users to understand how to set up their tasks.

- **One-Time and Recurring Tasks**: Distinguishes between scheduling tasks that run once and those that repeat, highlighting the flexibility of your package.

- **Error Handling**: Emphasizes the robust error handling built into your functions, which provides console feedback for invalid intervals.

- **Basic Usage & Scheduling Once**: Provides clear examples of how to use the `scheduleTask` and `scheduleOnce` functions, demonstrating both recurring and one-time tasks.

- **Clearing and Canceling Tasks**: Shows users how to manage tasks by clearing or canceling them using provided functions.

- **parseInterval**: Explains the `parseInterval` function for those who might want to understand or use the interval parsing logic separately.

- **API Documentation**: Provides detailed explanations of each function, parameters, and return values, aiding developers in implementing the package correctly.
````
