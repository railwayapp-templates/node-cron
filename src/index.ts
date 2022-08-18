import cron from 'node-cron';

cron.schedule(`*/1 * * * *`, async () => {
  console.log(`${new Date().toLocaleString()}: running your task...`);
});
