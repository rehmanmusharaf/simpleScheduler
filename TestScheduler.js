const { scheduleTask, clearTasks, scheduleOnce } = require("./simpleScheduler");
// Test scheduling a task every 3 seconds
const taskId2 = scheduleOnce(() => {
  console.log("Task executed 1 Time!");
}, "3 seconds");
// Test another task every 1 second
const anotherTaskId = scheduleTask(() => {
  console.log("Task executed every 1 second!");
}, "1 second");

// Clear tasks after 10 seconds
setTimeout(() => {
  clearTasks([anotherTaskId]);
  console.log("All tasks cleared!");
}, 10000);
