// simpleScheduler.js

/**
 * Schedules tasks at given intervals using human-friendly syntax.
 *
 * @param {Function} task - The function to execute at specified intervals.
 * @param {string} interval - The time interval (e.g., '5 seconds', '2 minutes').
 * @returns {NodeJS.Timeout} - Returns the timer ID for further control if needed.
 */
function scheduleTask(task, interval) {
  const milliseconds = parseInterval(interval);
  if (milliseconds > 0) {
    const timerId = setInterval(task, milliseconds);
    return timerId; // Return the timer ID for possible cancellation
  } else {
    console.error("Invalid interval specified. Task not scheduled.");
  }
}

/**
 * Parses the interval string into milliseconds.
 *
 * @param {string} interval - The interval to parse.
 * @returns {number} - The equivalent milliseconds or 0 if invalid.
 */
function parseInterval(interval) {
  const [amount, unit] = interval.split(" ");
  const unitMapping = {
    second: 1000,
    seconds: 1000,
    minute: 60000,
    minutes: 60000,
    hour: 3600000,
    hours: 3600000,
  };

  return parseInt(amount, 10) * (unitMapping[unit.toLowerCase()] || 0);
}

/**
 * Clears all scheduled tasks based on the provided array of timer IDs.
 *
 * @param {Array} tasks - An array of timer IDs to clear.
 */
function clearTasks(tasks) {
  tasks.forEach(clearInterval);
}

module.exports = {
  scheduleTask,
  parseInterval,
  clearTasks,
};
