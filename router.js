const {Router} = require('express');
const userRouter = require('./routers/userRouter');
const taskRouter = require('./routers/taskRouter');

const router = Router();

router.use('/tasks', taskRouter);

router.use('/users', userRouter);

module.exports = router;