const { scheduleTask, clearTasks } = require("./taskScheduler");

// Test scheduling a task every 3 seconds
const taskId = scheduleTask(() => {
  console.log("Task executed every 3 seconds!");
}, "3 seconds");

// Test another task every 1 second
const anotherTaskId = scheduleTask(() => {
  console.log("Task executed every 1 second!");
}, "1 second");

// Clear tasks after 10 seconds
setTimeout(() => {
  clearTasks([taskId, anotherTaskId]);
  console.log("All tasks cleared!");
}, 10000);
