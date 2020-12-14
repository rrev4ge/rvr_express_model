const express = require('express');
const { taskController } = require('./controllers');
const { validateTask, errorHandlers } = require('./middleware');
const router = require('./router');

const app = express();

app.use(express.json({ type: 'application/vnd.api+json' }),express.json());

app.use('/api', router)
// app.use(errorHandlers.sequelizeErrorHandler, errorHandlers.errorHandler);

// app.post('/task',validateTask.validateOnCreate, taskController.createTask);

// app.get('/tasks', taskController.getAllTasks);

// app
//   .route('/tasks/:taskId')
//   .get(taskController.getTask)
//   .patch(validateTask.validateOnUpdate, taskController.updateTask
//   )
//   .delete(taskController.removeTask
//   );

module.exports = app;

