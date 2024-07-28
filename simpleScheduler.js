// simpleScheduler.js
/**
 * Schedules tasks at given intervals using human-friendly syntax.
 *
 * @param {Function} task - The function to execute at specified intervals.
 * @param {string} interval - The time interval (e.g., '5 seconds', '2 minutes').
 * @returns {NodeJS.Timeout | undefined} - Returns the timer ID for further control if needed or undefined if invalid interval.
 */
function scheduleTask(task, interval) {
  const milliseconds = parseInterval(interval);
  if (milliseconds > 0) {
    const timerId = setInterval(task, milliseconds);
    return timerId; // Return the timer ID for possible cancellation
  } else {
    console.error("Invalid interval specified. Task not scheduled.");
    return undefined;
  }
}

/**
 * Schedules a task to run once after a specified interval using human-friendly syntax.
 *
 * @param {Function} task - The function to execute once after the specified interval.
 * @param {string} interval - The time interval (e.g., '5 seconds', '2 minutes').
 * @returns {NodeJS.Timeout | undefined} - Returns the timer ID for possible cancellation or undefined if invalid interval.
 */
function scheduleOnce(task, interval) {
  const milliseconds = parseInterval(interval);
  if (milliseconds > 0) {
    const timerId = setTimeout(task, milliseconds);
    return timerId; // Return the timer ID for possible cancellation
  } else {
    console.error("Invalid interval specified. Task not scheduled.");
    return undefined;
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
 * @param {Array<NodeJS.Timeout>} tasks - An array of timer IDs to clear.
 */
function clearTasks(tasks) {
  tasks.forEach(clearInterval);
}

/**
 * Cancels a scheduled task based on its timer ID.
 *
 * @param {NodeJS.Timeout} timerId - The timer ID to cancel.
 */
function cancelTask(timerId) {
  clearInterval(timerId);
}

module.exports = {
  scheduleTask,
  scheduleOnce,
  parseInterval,
  clearTasks,
  cancelTask,
};
